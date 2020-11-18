import { NextApiRequest, NextApiResponse } from 'next'

async function fetchMercadoStatus(_req: NextApiRequest, res: NextApiResponse){
    try{
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.cartolafc.globo.com/mercado/status", 
            {method:"GET",
            headers:{
                origin: "https://cartolafc.globo.com"
              }
            }
          )          
        let mercadoStatus = await response.json()

        res.status(200).json(mercadoStatus)
    }catch (error){
        res.status(500).json({ statusCode: 500, message: error.message })
  } 
}

export default fetchMercadoStatus