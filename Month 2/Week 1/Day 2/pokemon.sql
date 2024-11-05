-- Create a table
CREATE TABLE IF NOT EXISTS pokemon (
    id INTEGER PRIMARY KEY,
    name TEXT,
    type TEXT,
    weight INTEGER
);

-- Add to a table
INSERT INTO pokemon (name, type, weight)
VALUES
    ('Lucario', 'fighting/steel', 22),
    ('Psyduck', 'water', 8),
    ('Pikachu', 'electric', 10)
; 

-- Read from a table
-- SELECT * FROM pokemon;

-- Update a table
UPDATE pokemon
SET name='Golduck', weight=16
WHERE id=2;

-- SELECT * FROM pokemon;

-- Deleting from a table
DELETE FROM pokemon
WHERE id=3;

SELECT * FROM pokemon;

-- Delete a whole table
DROP TABLE IF EXISTS pokemon;


CREATE TABLE IF NOT EXISTS pokemon (
    id INTEGER PRIMARY KEY,
    name TEXT,
    type TEXT,
    weight INTEGER,
    deck_id INTEGER REFERENCES deck(id)
);

CREATE TABLE deck(
    id INTEGER PRIMARY KEY,
    title TEXT
);

-- Make 2 decks, 
-- 1 hot 
-- 1 cold deck

INSERT INTO deck(title) 
VALUES ('Hot'),
        ('Cold');

SELECT * FROM deck;

INSERT INTO pokemon(name, type, weight, deck_id)
VALUES
    ('Charizard', 'fire', 35, 1),
    ('Squirtle', 'water', 9, 2),
    ('Articuno', 'ice/flying', 18, 2),
    ('Magikarp', 'water', 9, null)
;

-- SELECT * FROM pokemon LEFT JOIN deck ON deck.id = pokemon.deck_id;

SELECT name, type, weight
FROM pokemon;