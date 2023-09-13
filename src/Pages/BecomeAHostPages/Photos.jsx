import React  from 'react';

import TitleComponent from '../../components/Become-a-Host/TitleComponent';
import '../../styles/BecomeAHost/Photos.css'
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
import { connect } from 'react-redux';
import { addPhoto } from '../../Redux/Actions/Listingactions';

const Photos = ({photos,addPhoto}) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
  console.log(photos)
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
   
    const filesArray = Array.from(event.target.files);
    setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...filesArray]);
    addPhoto([...selectedFiles, ...filesArray]);
    console.log(photos)
  };


  

  const TitleData = {
    title: 'Add some photos of your castle',
    description: 'You ll need 5 photos to get started. You can add more or make changes later.',
  };

  const removeImg = (indexToRemove) => {
    const updatedFiles = [...photos];
    updatedFiles.splice(indexToRemove, 1);
    setSelectedFiles(updatedFiles)
    addPhoto(updatedFiles);
  };

  return (
    <main  className={`Photos  fade-in ${isLoading ? 'loading' : ''}`}>
      

      
      <div className='HeaderPhotos'>
        <TitleComponent title={TitleData.title} description={TitleData.description} />
        
      </div>
      <div className='addImageBox'>
        <div className='ImageIcon' >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>
        <div>
          <h4>Drag your photos here</h4>
          <h5>Choose at least 5 photos</h5>
        </div>
        <input type="file" name='files' placeholder='choose atlest five files' className='border-none-input  ' multiple onChange={handleFileInputChange} /></div>
      <div className="selected-images">
      {photos.map((file, index) => (
       
          <div key={index} className={`image ${index === 0 ? 'span' : 'notSpan'}`}>
            <div onClick={()=>{removeImg(index)}} style={{color:'red'}} >X</div>
            {file instanceof File && <img src={URL.createObjectURL(file)} alt="img" enctype="multipart/form-data" multiple/>}
          </div>
        ))}
        </div>
    </main>
  );
};

const mapStateToProps = (state) => {

  return {
    photos: state.ListingReducer.photos
  };
};

const mapDispatchToProps = {
  addPhoto
};

export default connect(mapStateToProps,mapDispatchToProps) (Photos);
