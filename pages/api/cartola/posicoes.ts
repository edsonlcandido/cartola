import { NextApiRequest, NextApiResponse } from 'next'

function getPosicoes(_req: NextApiRequest, res: NextApiResponse){
    try{
        let posicoes : any = {
            "1": {
              "id": 1,
              "nome": "Goleiro",
              "abreviacao": "gol"
            },
            "2": {
              "id": 2,
              "nome": "Lateral",
              "abreviacao": "lat"
            },
            "3": {
              "id": 3,
              "nome": "Zagueiro",
              "abreviacao": "zag"
            },
            "4": {
              "id": 4,
              "nome": "Meia",
              "abreviacao": "mei"
            },
            "5": {
              "id": 5,
              "nome": "Atacante",
              "abreviacao": "ata"
            },
            "6": {
              "id": 6,
              "nome": "Técnico",
              "abreviacao": "tec"
            }
        }
        res.status(200).json(posicoes)

    }catch (error){
        res.status(500).json({ statusCode: 500, message: error.message })
  } 
}

export default getPosicoes


