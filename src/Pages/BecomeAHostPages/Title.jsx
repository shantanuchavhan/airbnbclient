import React from 'react'
import TitleComponent from '../../components/Become-a-Host/TitleComponent'
import { connect } from 'react-redux'
import { useEffect,useState } from 'react';
import '../../styles/CommonTransition.css'
import { setTitle } from '../../Redux/Actions/Listingactions'

const Title = ({title,setTitle }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);
    const [count,setCount]=useState(0)
    const data={
        title:"Now, let's give your castle a title",
        description:"Short titles work best. Have fun with it – you can always change it later."
    }
    function getText(event){
        if(event.target.value.length<=60){
            setCount(event.target.value.length)
            setTitle(event.target.value)
        }
       
    }
  return (
    <main className={`fade-in ${isLoading ? 'loading' : ''}`}>
        <TitleComponent
        title={data.title}
        description={data.description}
        />
        <div>
            <textarea value={title} onChange={getText} name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>{count}/60</div>
    </main>
  )
}

const mapStateToProps = (state) => {
    return {
      title: state.ListingReducer.title
    };
  };
  
  const mapDispatchToProps = {
    setTitle
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Title);