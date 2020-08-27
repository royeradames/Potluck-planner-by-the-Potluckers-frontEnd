import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DELETE } from '../store/reducer/reducer'
import { useHistory } from "react-router-dom"
import { axiosWithAuth } from '../utils/axiosWithAuth'

export default function Potlucks() {
    //states
    const [potluckList, setpotluckList] = useState()

    //helper functions
    const { push } = useHistory()
    const dispatch = useDispatch()

    // //states
    // const potluckList = useSelector(state => state)

    // const renderPotlucks = () => {
    //     //check if there is potluck on the list
    //     const isListNotHere = !(potluckList[0].potluckName)

    //     debugger
    //     return isListNotHere ? <p>Start hosting a new Potluck</p> : potluckList.map(aPotluck => {
    //         //make potluck name url friendly
    //         //lowercase
    //         //nospace
    //         let urlPotluckName = aPotluck.potluckName.replace(/\s+/g, '')
    //         urlPotluckName = urlPotluckName.toLowerCase()

    //         return (
    //             <section className="upcoming-potluck">
    //                 <h2>
    //                     Potluck Name: {aPotluck.potluckName}
    //                 </h2>
    //                 <p>
    //                     Date: {aPotluck.date}
    //                 </p>
    //                 <p>
    //                     Food List: {aPotluck.foodList}
    //                 </p>
    //                 <p>
    //                     Location: {aPotluck.location}
    //                 </p>
    //                 <p>
    //                     Invited: {aPotluck.invited.map((anInvited, index) => {
    //                     const lastIndex = (aPotluck.invited.length - 1)
    //                     const isLastNameOnList = lastIndex === index

    //                     //return the last name without a comman , so the list don't look uncompleted
    //                     if (isLastNameOnList) return `${anInvited.name}`

    //                     //return name on the invitation list
    //                     return `${anInvited.name},`
    //                 })}
    //                 </p>
    //                 <p>
    //                     Invited Confirmed Attendence: {aPotluck.myFoodList}
    //                 </p>
    //                 <p>
    //                     My food list: {aPotluck.myFoodList}
    //                 </p>

    //                 {/* Only if it bellongs to the user */}
    //                 <button onClick={() => push(`/edityourpotlock/${aPotluck.id}`)} className="btn edit">Edit Your Potlucker</button>
    //                 <button onClick={() => {
    //                     dispatch({ type: DELETE, payload: { id: aPotluck.id } })
    //                 }
    //                 } className="btn delete">Delete Potlucker</button>
    //                 <button className="btn public-btn" onClick={() => {
    //                     push(`/${aPotluck.id}/${urlPotluckName}`)
    //                 }
    //                 }>See live potluck</button>
    //             </section>
    //         )
    //     })

    // }
    const renderPotlucks = () => {
        //check if there is potluck on the list
        debugger
        const isListNotHere = !(potluckList)

        debugger
        return isListNotHere ?
            <p>Start hosting a new Potluck</p>
            :
            potluckList.map(aPotluck => {
                //make potluck name url friendly
                //lowercase
                //nospace

                let urlPotluckName = aPotluck.name.replace(/\s+/g, '')
                urlPotluckName = urlPotluckName.toLowerCase()

                return (
                    <section className="upcoming-potluck">
                        <h2>{aPotluck.name}</h2>
                        <p>{aPotluck.date} : {aPotluck.time}</p>
                        {/* <input type="date" name="date" id='date' value={aPotluck.date} disabled /> */}
                        <p></p>
                        {/* <p>
                        Food List: {aPotluck.foodList}
                    </p> */}
                        <p>
                            Location: {aPotluck.location}
                        </p>

                        <p>
                            {aPotluck.description}
                        </p>


                        {/* Only if it bellongs to the user */}
                        <button onClick={() => push(`/edityourpotlock/${aPotluck.id}`)} className="btn edit">Edit Your Potlucker</button>
                        <button onClick={() => {
                            dispatch({ type: DELETE, payload: { id: aPotluck.id } })
                        }
                        } className="btn delete">Delete Potlucker</button>
                        <button className="btn public-btn" onClick={() => {
                            push(`/${aPotluck.id}/${urlPotluckName}`)
                        }
                        }>See live potluck</button>
                    </section>
                )
            })

    }
    useEffect(() => {
        axiosWithAuth().get('users/getuserinfo')
            .then((resp) => {
                setpotluckList(resp.data.potlucks)
                debugger
            })
            .catch((err) => {
                console.error(err)
                debugger
            })
    }, [])

    return (
        <div className='container potlucks-container'>
            <h1>Welcome to the Dashboard</h1>

            <h2>Your Hosted Potlucks</h2>
            {renderPotlucks()}

        </div>
    )
}
