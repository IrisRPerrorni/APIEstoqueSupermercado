package com.example.APIEstoque.service;

import com.example.APIEstoque.model.ProdutoModel;
import com.example.APIEstoque.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    ProdutoRepository produtosRepository;

    public ProdutoModel cadastrar(ProdutoModel produtosModel){

        return produtosRepository.save(produtosModel);
    }

    public List<ProdutoModel> exibirTodos(){
        return produtosRepository.findAll();
    }

    public Optional<ProdutoModel> exibirPorID(Long id){
        return produtosRepository.findById(id);
    }

}
