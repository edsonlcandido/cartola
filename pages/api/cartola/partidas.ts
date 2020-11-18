import { NextApiRequest, NextApiResponse } from 'next'

async function fetchPartidas(_req: NextApiRequest, res: NextApiResponse){
    try{
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.cartolafc.globo.com/partidas", 
            {method:"GET",
            headers:{
                origin: "https://cartolafc.globo.com"
              }
            }
          )          
        let partidas = await response.json()

        res.status(200).json(partidas)
    }catch (error){
        res.status(500).json({ statusCode: 500, message: error.message })
  } 
}

export default fetchPartidas