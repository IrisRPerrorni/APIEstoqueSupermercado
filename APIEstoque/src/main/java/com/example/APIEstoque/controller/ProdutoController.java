package com.example.APIEstoque.controller;

import com.example.APIEstoque.model.ProdutoModel;
import com.example.APIEstoque.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/produtos")
public class ProdutoController {
    @Autowired
    ProdutoService produtoService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @CrossOrigin(origins = "http://127.0.0.1:5500/")
    public ResponseEntity<ProdutoModel> cadastrarProdutos(@RequestBody ProdutoModel produtosModel) {
        return ResponseEntity.ok(produtoService.cadastrar(produtosModel));

    }

    @GetMapping
    @CrossOrigin(origins = "http://127.0.0.1:5500/")

    public ResponseEntity<List<ProdutoModel>> listarProdutos() {
        return ResponseEntity.ok(produtoService.exibirTodos());
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins = "http://127.0.0.1:5500/")

    public Optional<ProdutoModel> exibirProdutoPorId(@PathVariable Long id){ //optional vai pegar uma lista e procurar dentro da lista uma informação

        return produtoService.exibirPorID(id);
    }
}
