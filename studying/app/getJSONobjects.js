
async function getJSONobject(request, response) {


        console.log("Everything is okey!");
        console.log(JSON.stringify(request.body));

        if(request.body) return () => {
            try {
                console.log({
                    status: 200,
                    body: JSON.stringify(request.body)
                }.json());
                response.sendStatus(200)         
            } catch (error) {
                console.log(error);
                return false 
            }
        };
        
        if(!request.body) return response.sendStatus(400);
}

module.exports = getJSONobject()