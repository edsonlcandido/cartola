import { NextApiRequest, NextApiResponse } from 'next'

async function fetchAtletasMercado(_req: NextApiRequest, res: NextApiResponse){
    try{
        const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.cartolafc.globo.com/atletas/mercado", 
            {method:"GET",
            headers:{
                origin: "https://cartolafc.globo.com"
              }
            }
          )          
        let mercado = await response.json()
        response.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate')
        res.status(200).json(mercado)
    }catch (error){
        res.status(500).json({ statusCode: 500, message: error.message })
  } 
}

export default fetchAtletasMercado
