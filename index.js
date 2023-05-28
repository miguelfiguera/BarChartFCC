const asking=async()=>{
    const request= await fetch(' https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
    const response = await request.json()
    return response
}

const processing = async()=>{
    const data= await asking()
    const DataObject={
        title: data.source_name,
        data:data.data,
    }
    console.log(DataObject)
    return DataObject
}

const title=processing().then((obj)=>{d3.select('h1').text(obj.title)})

const dataset=processing().then((obj)=>{return obj.data})

// you have to use the function above to manipulate the data directly so it gets on the dom
//the way it is supposed to. 

const h = 500;
const w = 900;


//svg
const svg = d3
  .select(".forSvg")
  .append("svg")
  .attr("height", h)
  .attr("width", w);


