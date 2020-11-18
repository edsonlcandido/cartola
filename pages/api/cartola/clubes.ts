import { NextApiRequest, NextApiResponse } from 'next'

async function fetchClubes(_req: NextApiRequest, res: NextApiResponse){
    try{
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.cartolafc.globo.com/clubes", 
            {method:"GET",
            headers:{
                origin: "https://cartolafc.globo.com"
              }
            }
          )          
        let clubes = await response.json()

        res.status(200).json(clubes)
    }catch (error){
        res.status(500).json({ statusCode: 500, message: error.message })
  } 
}

export default fetchClubes