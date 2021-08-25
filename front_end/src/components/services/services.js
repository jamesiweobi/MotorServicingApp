
import React, { useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";
import InputGroup from "./InputGroup";
import { EntryPage, PageHeader } from "./entryPage";
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import servicesAsync from "../../redux/actions/servicesAction";
servicesAsync


const Services = ()=>  {
    const dispatch = useDispatch()

   useEffect(() => {
    axios
    .get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
    .then(res => {
     let api = res.data.feed.entry;
    console.log(api)
          setTopAlbum(api)
          setLoading(false)
        })
    .catch (error => {
        return error;
      })
    },[])

    if (loading){
      return <Image5 src={Loader} alt="" />
  } 
   
    
    
  return (
    <div> 
      
      <TopAlbumHeader />
      {loading}
      <AlbumSearch>
      <Heading className="writeup2">Top 100 Albums</Heading>
      <FormSearch> 
        <InputForm className="writeup2" type='text' placeholder='Search TopAlbums' value={search} onChange={(e)=> setSearch(e.target.value)}/>
       
      </FormSearch>
      </AlbumSearch>
    
    <Content>
    
   {
     topAlbum.filter((item)=>{
      
      const title = item['im:name'].label
      const artist = item['im:artist'].label
      const musicLabel = item.category.attributes.label

      if (search == ""){
        return item
      }
      
      else if ((artist.toLowerCase().includes(search.toLowerCase()))||(title.toLowerCase().includes(search.toLowerCase())) ||(musicLabel.toLowerCase().includes(search.toLowerCase()))){
        return item
      }
     })
     .map((item)=>{
      const id = item.id.attributes['im:id']
      const label = item.id.label
      const title = item['im:name'].label
      const artist = item['im:artist'].label
      const image = item['im:image']['2'].label
      const musicLabel = item.category.attributes.label
      const releaseDate = item['im:releaseDate'].attributes.label
      return( <Section key={id} > 
  
           <Image4 src={image} alt="" /> 
            <MusicTitle className='musicTitle'> Album Title:  {title} </MusicTitle>
            <MusicTitle className='musicTitle'> Artist:  {artist} </MusicTitle>
            <Category className='musicTitle'> Category: {musicLabel} </Category>
            <ReleaseDate className='musicTitle'>Release Date: {releaseDate} </ReleaseDate>
           <ViewLike> <Preview> <a href={label} target="_blank" className="preview" rel="noreferrer"> <FaPlay /> Preview  </a></Preview>
            <Favourite />
            </ViewLike>
            
        </Section>)
   })
   }
    
    </Content>
    
    
    </div>
  );
}


const TopAlbumHeader = () => {
      return  <Background3> </Background3>

}
  

export {TopAlbum, Favourite};
