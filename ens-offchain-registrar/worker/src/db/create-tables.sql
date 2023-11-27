DROP TABLE IF EXISTS contracts;
DROP TABLE IF EXISTS tokens;
DROP TABLE IF EXISTS tokenInfo;

CREATE TABLE IF NOT EXISTS contracts (
	owner VARCHAR(30) NOT NULL,
	contract VARCHAR(30) NOT NULL PRIMARY KEY,
	description TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS tokens (
	t_index INT AUTO_INCREMENT  PRIMARY KEY,
	receiver VARCHAR(30) NOT NULL,
    tokenType INT NOT NULL,
    interval INT NOT NULL,
    links TEXT NOT NULL,
    onLoop BOOLEAN,
    destinationChainSelector BIGINT NOT NULL,
    price INT NOT NULL,
    duration INT NOT NULL
);
CREATE TABLE IF NOT EXISTS tokenInfo (
	t_index INT NOT NULL,
	tokenIndex INT AUTO_INCREMENT  PRIMARY KEY,
    owner VARCHAR(30) NOT NULL,
    lastUpdated INT NOT NULL,
    currLink TINYINT NOT NULL,
    activeTill INT NOT NULL
);