package com.proyecto.proyecto.controllers;

import ch.qos.logback.core.joran.util.beans.BeanDescriptionFactory;
import com.proyecto.proyecto.dao.UsuarioDao;
import com.proyecto.proyecto.models.Usuario;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioDao usuarioDao;


    @RequestMapping(value = "api/usuario/{id}", method = RequestMethod.GET )
    public Usuario getUsuario(@PathVariable Long id){
        Usuario usuario = new Usuario();
        usuario.setId(id);
        usuario.setNombre("Luis Alberto");
        usuario.setApellido("Petro Herrera");
        usuario.setPassword("lofwfwnknñajhip");
        usuario.setEmail("Luispetro@gmail.com");
        usuario.setTelefono("3233917093");
        return usuario;
    }

    @RequestMapping(value = "api/usuarios", method = RequestMethod.POST )
    public void registrarUsuarios(@RequestBody  Usuario usuario){
        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(2,1024,2,usuario.getPassword());
        usuario.setPassword(hash);
      usuarioDao.regitrar(usuario);
    }

    @RequestMapping(value = "api/usuarios", method = RequestMethod.GET )
    public List<Usuario> getUsuarios(){
        return  usuarioDao.getUsuarios();
    }



    @RequestMapping(value = "api/delete/{id}", method = RequestMethod.DELETE )
    public void deleteUser(@PathVariable Long id){
        usuarioDao.delete(id);
      }



}
