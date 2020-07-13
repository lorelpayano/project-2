import React, { Component } from 'react';
import nutritionix from '../nutritionix'


const YOUR_APP_ID   = 'b9b8c82e'; // Your APP ID
const YOUR_API_KEY  = 'c5e6d5a953ec1e27906aa91050035dea'; // Your KEY
nutritionix.init(YOUR_APP_ID,YOUR_API_KEY);

class Exercise extends Component {
    state = {
        exerciseList: [],
        query3: '',
        exerciseSearch: ''
    }


// submitting = async () => {
//     const ingredient = this.state.query.map(i => `${i.qty} ${i.measurement} ${i.name}`).join('\n');
//     console.log(this.state.query, ingredient)
//     const res = await nutritionix.natural.search(ingredient)
//     console.log(res);
//     this.testExercise()
    
//     this.setState({
//         // source: res2.data.data[0].id,
//         foodData: res.foods
//     })
//     }

exerciseSearch = (event) => {
    this.setState ({
        query3: event.target.value
    })
}

// getIngredient = (ingredients) => {
//     console.log(ingredients)
//     this.setState({
//       query: ingredients
//     })

submitExercise = async (event) => {
    const exercise = this.state.query3;
    console.log(this.state.query3, exercise)
    const res = await nutritionix.exercise.search(exercise);
    console.log(res)

    this.setState ({
        exerciseList: res
    })
}

addExercise = (event) => {
    this.setState({
        [event.target.exerciseSearch]: event.target.value
    })
}

enterExercise = (event) => {
    event.preventDefault()
    console.log("submit")
    let exerciseCopy = [...this.state.exerciseList]
    exerciseCopy.push({
        exerciseSearch : this.state.exerciseSearch,
    })
    // this.props.getIngredient(arrayCopy)
    this.setState({
        exerciseList : exerciseCopy,
        exerciseSearch: '',
    })
}

displayExercise = () => {
    return this.state.exerciseList.map((eachExercise) => {
        return (
        <div key={eachExercise.exercises[0].name}>

        <h3>{eachExercise.exercises[0].duration_min}</h3>
        <p>{eachExercise.exercises[0].nf_calories}</p>
        <p>{eachExercise.exercises[0].healthLabels}</p>
        <p><img className='exercise-image' src={eachExercise.exercises[0].photo.highres} alt='img'/></p>
        </div>
        );
    })
}

// exercises[0].duration_min: 30
// exercises[0].name: "yoga"
// exercises[0].nf_calories: 115.5
// exercises[0].photo: {highres: "https://d2xdmhkmkbyw75.cloudfront.net/exercise/765_highres.jpg", thumb: "https://d2xdmhkmkbyw75.cloudfront.net/exercise/765_thumb.jpg", is_user_uploaded: false}



    render() {
        return (
            <div>

                <form onSubmit = {this.submitExercise}>               
                <label htmlFor="search"></label>
                <input onChange={this.exerciseSearch} className='searchBar' type="text" value ={this.state.query3}name="exerciseSearch" placeholder='Search any exercise' required />
                <button type='submit' id='exerciseSearch'> Search</button>
                </form> 
                
                {this.displayExercise()}
            </div>
        );
    }
}

export default Exercise;