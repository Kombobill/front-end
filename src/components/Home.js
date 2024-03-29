import React from 'react';
import { Link } from 'react-router-dom';
// import image1 from '../images/image1.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='home-banner'>
        <div className='home-banner-text'>
          <h1>We Help Families Care for their Loved Ones</h1>
          <br />
          <p>
            We Help Families Care for their Loved Ones Central hospital provides home
            health care services and supports so that every person may live a
            fulfilled life in their home and community regardless of disability.
          </p>
          <br />
          <img className="img"src="https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427_960_720.jpg" className='home-cont-3-img' alt='iCare'/>

          <Link to={`/signup`}>
            <button type='button'>Register Patient</button>
          </Link>
        </div>
      </div>
      <div className='home-cont-2'>
        <div className='home-cont-2-text'>
          <h1>
            Learn How to Be Efficient in Providing Care for Your Loved One
          </h1>
          <p>
            <br />
            We believe the best care is delivered when it is delivered with
            love. Who knows more about the nuances, preferences, and type of
            care that should be provided to your loved one than a family member
            or trusted friend?
          </p>
          <br />
        
        </div>
      </div>
      <div className='home-cont-3'>
      <img src="https://cdn.pixabay.com/photo/2020/05/14/02/31/covid-19-5169689_960_720.jpg" className='home-cont-3-img' alt='iCare'
      />
        <h1>
          Central Hospital delivers home and community-based services that support
          long-term independence
        </h1>
        <br />
        <p>
          We provide home health, nursing, personal care, and community-based
          services as well as 24/7 backup services for nursing and in-home care.
          Our experienced Intake Specialists and nurses are here to help
          determine the best fit for your individual situation.
        </p>
       
        <br />
        <br />
      </div>
      <div className='home-cont-4'>
        <div className='home-cont-4-text'>
          <h1>How do you Care For Someone with Cerebral Palsy?</h1>
          <br />
          <p className='home-cont-4-text-p'>
            Cerebral palsy (CP) is the most common childhood disability. In the
            United States, about 764,000 people currently have this condition.
            While some exhibit only a few symptoms, others need assistance with
            basic activities like walking and eating. Depending on the severity
            of the condition, caring for someone with cerebral palsy can be
            complicated. Since CP affects motor skills, you may need to help the
            inpidual walk, go to the bathroom, eat, and dress.{' '}
          </p>
          <p className='home-cont-4-text-p'>
            Let’s take a closer look at what cerebral palsy is and what caring
            for an individual with this condition entails. It’s important to
            understand that cerebral palsy isn’t a disease. It’s a condition
            that affects areas of an individual’s brain that are responsible for
            movement. CP occurs due to abnormal brain development or an injury
            to a developing brain. Brain damage usually happens before birth.
            However, it can also occur during the first years of the child’s
            life. While cerebral palsy isn’t a genetic condition, research shows
            that some hereditary factors can put an individual at risk of
            developing it. Different types of cerebral palsy exist. They are
            classified based on the main type of movement disorder affecting the
            individual. Read more...
          </p>
        </div>

        <div className='home-cont-4-text'></div>
      </div>
    </div>
  );
}

export default Home;
