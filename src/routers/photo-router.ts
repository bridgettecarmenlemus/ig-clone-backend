import { Router, Request, Response } from "express";
import { getAllPhotos, photoServices } from "../services/photo-services";

export const photoRouter = Router()

photoRouter.get('/', async (req: Request, res: Response) => {
    const results = await getAllPhotos()

    res.status(200).send(results)

})

photoRouter.post('/', async (req: Request, res: Response) => {
    const { photoUrl, description } = req.body

    if (!photoUrl) {
        res.status(400).send('PhotoUrl required')
        return 
    }

    const insertedId = await photoServices.createPhoto({photoUrl, description})

    res.status(201).send({ insertedId })

})