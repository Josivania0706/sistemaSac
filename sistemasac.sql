-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02/06/2023 às 13:22
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sistemasac`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `mensagens`
--

CREATE TABLE `mensagens` (
  `idmsg` int(11) NOT NULL,
  `msgtitulo` varchar(45) NOT NULL,
  `msgtxt` varchar(500) NOT NULL,
  `msgdata` datetime NOT NULL DEFAULT current_timestamp(),
  `msgdestino` tinyint(4) NOT NULL,
  `msgstatus` tinyint(4) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `mensagens`
--

INSERT INTO `mensagens` (`idmsg`, `msgtitulo`, `msgtxt`, `msgdata`, `msgdestino`, `msgstatus`) VALUES
(44, 'uteste', 'demoo', '2023-06-01 21:16:26', 1, 0),
(43, 'uteste', 'demoo', '2023-06-01 21:16:26', 1, 0),
(42, 'uteste', 'demoo', '2023-06-01 21:14:47', 1, 0),
(41, 'uteste', 'demoo', '2023-06-01 21:14:47', 1, 0),
(40, 'uteste', 'demoo', '2023-06-01 21:14:40', 1, 0),
(39, 'uteste', 'demoo', '2023-06-01 21:14:40', 1, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) UNSIGNED NOT NULL,
  `nome` varchar(50) NOT NULL,
  `senha` varchar(40) NOT NULL,
  `email` varchar(100) NOT NULL,
  `nivel` int(1) UNSIGNED NOT NULL DEFAULT 1,
  `ativo` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `senha`, `email`, `nivel`, `ativo`) VALUES
(1, 'Administrador Teste', 'd033e22ae348aeb5660fc2140aec35850c4da997', 'marcos.smz76@gmail.com', 2, 1),
(2, 'uteste', '89e495e7941cf9e40e6980d14a16bf023ccd4c91', 'usuario@demo.com', 1, 1),
(4, 'Ab', 'ab', 'ab', 1, 1),
(5, '553241', 'asdasderwre', '123', 1, 1),
(6, 'aaaaa', 'aaaa', 'aa', 6, 1),
(7, 'aaaaa', 'aaaa', 'aa', 6, 1),
(8, 'aaaaa', 'aaaa', 'aa', 6, 1),
(9, 'AAA', 'AA', 'df51e37c269aa94d38f93e537bf6e2020b21406c', 1, 1),
(10, 'aaaa', '70c881d4a26984ddce795f6f71817c9cf4480e79', 'aaa', 1, 1),
(11, 'AA', '$2y$10$07x9o2xtDPkXbj.UgDNYIOlkgQbCUMwkf', 'aa', 1, 1),
(12, 'aaa', '7e240de74fb1ed08fa08d38063f6a6a91462a815', 'aaa', 5, 1),
(13, 'aa', 'e0c9035898dd52fc65c41454cec9c4d2611bfb37', 'aa', 2, 1),
(14, 'a', '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8', 'a', 2, 1),
(15, 'uteste', 'demo', 'aaaaaa', 2, 1),
(16, 'uteste', 'demo', 'aaaaaa', 2, 1),
(17, 'uteste', 'demo', 'aaaaaa', 2, 1),
(18, 'uteste', 'demo', 'aaaaaa', 2, 1),
(20, 'Marcos', '774e59b9897848a316224daa432bd682e4381a4d', 'asdioinasod@gmail.com', 1, 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `mensagens`
--
ALTER TABLE `mensagens`
  ADD PRIMARY KEY (`idmsg`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nivel` (`nivel`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `mensagens`
--
ALTER TABLE `mensagens`
  MODIFY `idmsg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
