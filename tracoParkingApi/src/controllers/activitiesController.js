import { openDB } from "../database.js";

export const activityCheckin = async (req, res) => {
    const { label } = req.body;

    const db = await openDB()

    const vehicle = await db.get(
        `SELECT * FROM vehicles WHERE label = ?
        
    `, [label]);

    if (vehicle){
        const checkinAt = (new Date()).getTime();
        const data = await db.run(`
            INSERT INTO activities (vehicle_id, checkin_at)
            VALUES  (?, ?)
        `, [vehicle.id, checkinAt])
        db.close();

        res.send({
            vehicle_id: vehicle.id,
            checkin_at: checkinAt,
            message: `Veículo [${vehicle.label}] entrou no estacionamento`
        });
        return;
    }

    db.close();

    res.status(400).send({
        message: `Veículo [${vehicle.label}] não encontrado`
    });

}

export const activityCheckout = async (req, res) => {

    const { label, price } = req.body;

    const db = await openDB()
    const vehicle = await db.get(`
        SELECT * FROM vehicles WHERE label = ?        
    `, [label]);

    if (vehicle){
        const activityOpen = await db.get(`
            SELECT * FROM activities WHERE vehicle_id = ? AND checkout_at IS NULL
        `, [vehicle.id]);

        if(activityOpen){
         const checkoutAt = (new Date()).getTime();
            const data = await db.run(`
                UPDATE activities
                    SET checkout_at = ?,
                        price = ?
                WHERE id = ?
            `, [checkoutAt, price, activityOpen.id])

            db.close();

            res.send({
                vehicle_id: vehicle.id,
                checkout_at: checkoutAt,
                price: price,
                message: `Veículo [${vehicle.label}] saiu do estacionamento`
            });
            return;   
        }      

        db.close();

        res.status(400).send({
            message: `Veículo [${label}] não realizou checkin`
        });
        return; 
    }

    db.close();

    res.status(400).send({
        message: `Veículo [${label}] não encontrado`
    });
}

export const listActivities =  async (req, res) => {
    
    const db = await openDB()
    const activities = await db.all(
        `SELECT * FROM activities
        
    `);
    db.close()
    
    res.send(activities)
}

export const removeActivity = async (req, res) => {

    const { id } = req.params;

    const db = await openDB();
    const data = await db.run(
        ` DELETE FROM activities 
            WHERE id = ?
        
    `, [id]);
    db.close()

    res.send({
        id,message: `Atividade [${id}] removida com sucesso!`
    })
}
