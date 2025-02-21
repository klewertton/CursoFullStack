--1.0 Criação de Tabela Produtos
create table produtos (
	id SERIAL primary key,
	nome varchar(100),
	preco decimal(10, 2),
	estoque INT
);

--1.1 Criando sozinho
create table consulta (
	id SERIAL primary key,
	paciente varchar(100),
	data_hora TIMESTAMP,
	status varchar(50)
);

--Insira três produtos na tabela produtos
insert into produtos (
	nome, preco, estoque
)
values
('Arroz', 10.00, 100),
('Feijão', 10.20, 200),
('Macarrão', 4.70, 150)

--2.1 Criando sozinho
insert into consulta (
	paciente, data_hora, status
)
values
('João', '2024-12-20 10:00:00', 'Aguardando Retorno'),
('João', '2025-01-20 11:00:00', 'Cancelado'),
('João', '2025-02-20 14:00:00', 'Agendado')

--3 Selecione todos os campos nas tabelas
select * from produtos

--3.1 Selecionando sozinho
select * from consulta

--4 Atualize um campo da tabela
update produtos
set preco = 12.50, estoque = 95
where id = 3;

--4.1 Atualizando sozinho
update consulta
set data_hora = '2025-04-20 15:00:00', status = 'Reagendado'
where id = 2;

update consulta
set paciente = 'Luiz'
where id = 3;

--5 Delear um dos itens
delete from produtos where id = 1;

--5.1 Deletando sozinho
delete from consulta where id = 1;

--6 Crie uma tabela chamada Fornecedores com as colunas:
create table fornecedores (
	id SERIAL primary key,
	nome VARCHAR(100),
	telefone VARCHAR(15)
);

--6.1 Criando outra tabela Medicos com as colunas (id chave primaria inteiro, nome, especialidade)
create table medico(
	id SERIAL primary key,
	nome VARCHAR(100),
	especialidade VARCHAR(100)
);

--7 Inserindo dois fornecedores
insert into fornecedores
(nome, telefone)
values
('Fornecedor 1', '123-456-7890'),
('Fornecedor 2', '098-765-4321')

--7.1 Sozinho: inserindo dois medicos
insert into medico
(nome, especialidade)
values
('Medico 1', 'Clinico Geral'),
('Medico 2', 'Pediatra')

--8 Modificando a tabela produtos para incluir uma coluna fornecedores_id que cria uma chave estrangeira referenciando a coluna id da tabela fornecedores
alter table produtos
add column fornecedor_id INT,
add foreign key (fornecedor_id)
references fornecedores(id);

--8.1 Modificando minha tabela
alter table consulta
add column medico_id INT,
add foreign key (medico_id)
references medico(id);

--9 Atribuir um fornecedor ao produto que ja existe
update produtos set fornecedor_id = 2
where id=2;

--9 Atribuinto na minha tabela
update consulta set medico_id = 2
where id=2;

--10 Selecione a tabela de produtos e o nome do fornecedor (join)
select p.nome, f.nome from produtos p
join fornecedores f on p.fornecedor_id=f.id
where p.id = 2;

--10.1 Unindo minha tabela
select c.paciente, m.nome from consulta c
join medico m on c.medico_id=m.id








