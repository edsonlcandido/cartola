import { NextApiRequest, NextApiResponse } from 'next'

async function fetchAtletasPontuados(_req: NextApiRequest, res: NextApiResponse){
    try{
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.cartolafc.globo.com/atletas/pontuados", 
            {method:"GET",
            headers:{
                origin: "https://cartolafc.globo.com"
              }
            }
          )          
        let pontuados = await response.json()
        res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate')
        res.status(200).json(pontuados)
    }catch (error){
        res.status(500).json({ statusCode: 500, message: error.message })
  } 
}

export default fetchAtletasPontuados