DROP TABLE IF EXISTS contracts;
DROP TABLE IF EXISTS tokens;
DROP TABLE IF EXISTS tokenInfo;

CREATE TABLE IF NOT EXISTS contracts (
	owner VARCHAR(30) NOT NULL,
	contract VARCHAR(30) NOT NULL PRIMARY KEY,
	description TEXT NOT NULL,
    avatar TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS tokens (
	t_index INT AUTO_INCREMENT  PRIMARY KEY,
	receiver VARCHAR(30) NOT NULL,
    token_type INT NOT NULL,
    interval INT NOT NULL,
    links TEXT NOT NULL,
    on_loop BOOLEAN NOT NULL,
    destination_chain_selector BIGINT NOT NULL,
    price INT NOT NULL,
    duration INT NOT NULL
);
CREATE TABLE IF NOT EXISTS tokenInfo (
	t_index INT NOT NULL,
	token_index INT AUTO_INCREMENT  PRIMARY KEY,
    owner VARCHAR(30) NOT NULL,
    last_updated INT NOT NULL,
    curr_link TINYINT NOT NULL,
    active_till INT NOT NULL
);