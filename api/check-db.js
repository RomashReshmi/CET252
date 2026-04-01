const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./data.db');
db.get("SELECT COUNT(*) as count FROM products", [], (err, row) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Record count:", row.count);
    db.close();
});
