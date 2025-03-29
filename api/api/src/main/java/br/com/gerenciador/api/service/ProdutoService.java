package br.com.gerenciador.api.service;


import br.com.gerenciador.api.dto.ProdutoRequestDTO;
import br.com.gerenciador.api.dto.ProdutoResponseDTO;

public interface ProdutoService {
    ProdutoResponseDTO criarProduto(ProdutoRequestDTO dto);
}
