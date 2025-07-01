import db from "#db/client";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  await client.connect();

  await client.query(`DELETE FROM files`);
  await client.query(`DELETE FROM folders`);

  for (let i = 1; i <= 3; i++) {
    const folderRes = await client.query(
      `INSERT INTO folders (name) VALUES ($1) RETURNING *`,
      [`Folder ${i}`]
    );

    const folderId = folderRes.rows[0].id;

    for (let j = 1; j <= 5; j++) {
      await client.query(
        `INSERT INTO files (name, folder_id) VALUES ($1, $2)`,
        [`File ${j} of Folder ${i}`, folderId]
      );
    }
  }

  await client.end();
}

seed().catch((err) => {
  console.error(err);
  client.end();
});
