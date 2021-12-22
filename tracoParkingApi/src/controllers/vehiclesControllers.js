import { openDB } from "../database.js";

export const listVehicles =  async (req, res) => {
    // const { id } = req.query;
    const db = await openDB()
    const vehicles = await db.all(
        `SELECT * FROM vehicles
        
    `);
    db.close()

    // if(id){
    //     res.send(vehicles.filter(vehicle => vehicle.id == id));
    //     return;
    // }    
    res.send(vehicles)
}

export const insertVehicles = async (req, res) => {
    const { model, label, type, owner, observation} = req.body;

    const db = await openDB();
    const data = await db.run(
        `INSERT INTO vehicles (model, label, type, owner, observation)
            VALUES (?, ?, ?, ?, ?)
        
    `, [model, label, type, owner, observation]);
    db.close()

    res.send({
        id: data.lastID, model, label, type, owner, observation
    })
    
}

export const updateVehicles = async (req, res) => {
    const { model, label, type, owner, observation} = req.body;
    const {id} = req.params;

    const db = await openDB();

    const vehicle = await db.get(`
        SELECT * FROM vehicles WHERE id = ?
    `, [id]);

    if(vehicle){
        const vehicle = await db.run(`
            UPDATE vehicles 
                SET model = ?, label = ?, type = ?, owner = ?, observation = ?
            WHERE id = ?
        `, [model, label, type, owner, observation, id]);

        db.close()

        res.send({
            id, model, label, type, owner, observation
        })
        return;

    }
    
    db.close()
    
    res.status(400).send(vehicle || {})

}

export const removeVehicles = async (req, res) => {
    const { id } = req.params;

    const db = await openDB();
    const data = await db.run(
        ` DELETE FROM vehicles 
            WHERE id = ?
        
    `, [id]);
    db.close()

    res.send({
        id,
        message: `Veículo [${id}] removido com sucesso!`
    })

}
