import React, {useEffect,useState} from 'react';
import Divider from '../components/Divider';
import { SampleBox } from '../components/SampleBox';
import FeedList from '../components/FeedList';

function Content (){

    const [uploadPressed, setUploadPressed] =useState(false);

    
    const [samples, setSamples] =useState([]);
    useEffect(()=> {
      fetch("http://127.0.0.1:8000/api/samples/", {
        method: 'GET',
      /* headers:{
          'Content-Type':'application/json',
          'Authorization':'Token ' + localStorage.getItem('token'),  //dinamik token yeri
        }*/
      } ).then( resp=> resp.json())
         .then( resp=>setSamples(resp))
         .catch(error=>console.log(error))
         
  
    }, [])




    return (
        <main className="flex-1 flex flex-col border-r border-l border-gray-ultralight">
            <header className="sticky top-0  z-10 flex justify-between items-center p-4 border-b border-gray-ultralight bg-white">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <button className="bg-purple-600 text-white shadow-lg rounded-full hover:bg-primary-base px-4 py-2 font-medium transform transition-colors duration-500" /*onClick={this.goToUpload}*/>Upload</button>
            </header>

            
            <Divider />

            <FeedList samples= {samples}/>
            
        </main>
    );
};

export default Content;
