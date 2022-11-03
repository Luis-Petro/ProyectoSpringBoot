package com.proyecto.proyecto.dao;

import com.proyecto.proyecto.models.Usuario;

import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuarios();

    void delete(Long id);

    void regitrar(Usuario usuario);
}
