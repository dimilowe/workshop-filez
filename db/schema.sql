-- TODO
-- Drop if exists
DROP TABLE IF EXISTS files;
DROP TABLE IF EXISTS folders;

-- Create folders table
CREATE TABLE folders (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

-- Create files table
CREATE TABLE files (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  folder_id INTEGER NOT NULL REFERENCES folders(id) ON DELETE CASCADE,
  UNIQUE(name, folder_id)
);
