import { NextApiRequest, NextApiResponse } from 'next'

function getStatus(_req: NextApiRequest, res: NextApiResponse){
    try{
        let status : any = {
          "2": {
            "id": 2,
            "nome": "Dúvida"
          },
          "3": {
            "id": 3,
            "nome": "Suspenso"
          },
          "5": {
            "id": 5,
            "nome": "Contundido"
          },
          "6": {
            "id": 6,
            "nome": "Nulo"
          },
          "7": {
            "id": 7,
            "nome": "Provável"
          }
        }
        res.status(200).json(status)

    }catch (error){
        res.status(500).json({ statusCode: 500, message: error.message })
  } 
}

export default getStatus


