
export default defineEventHandler(async (event) =>  {

    if (event.req.method === 'GET') {
      const data = await fetch('https://dummyjson.com/products');
      
    
        return data.json();
      //update a blog by id
      // return the blog;
    }
    if (event.req.method === 'DELETE') {
      // delete a blog by id
      // return success;
    }

  });