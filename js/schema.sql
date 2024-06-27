CREATE DATABASE apnea;
USE apnea;

CREATE TABLE contestants (
  id integer PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  lasttName VARCHAR(255) NOT NULL,
  country TEXT(2) NOT NULL,
  pbSTA TEXT,
  pbDYN TEXT,
  pbDYNB TEXT,
  pbDNF TEXT,
  pbCWT TEXT,
  pbCWTB TEXT,
  pbCNF TEXT,
  pbFIM TEXT,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO contestants (firstName, lasttName, country)
VALUES
('Franka Johanna', 'Gaarder', 'no');
