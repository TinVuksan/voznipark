import React, { useEffect } from "react"
import "../DodajVozilo/DodajVozilo.css"
import Navbar from "../Navbar/Navbar"
import Form from "react-bootstrap/Form"
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import {useState} from "react"
import Button from "react-bootstrap/Button"
import Axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import DatePicker from "react-date-picker"
import {format, add, parseISO} from "date-fns"




export default function Uredi() {
    
    const Navigate = useNavigate()
    const [data, setData] = useState([])
    const [value, setValue] = useState(new Date())
   // const [istekReg, setIstekReg] = useState(new Date())
   const [istek, setIstek] = useState(new Date())
    const [formData, setFormData] = useState({
		marka: "", model: "", vrsta: "", registracija: value,  slika: ""
	})
   
    useEffect(() => {
        getData()
    }, [])

    const getData = (id) => {
        var params = new URLSearchParams()
        params.append('Id', id)
        Axios.get("http://localhost/voznipark/src/API/getById.php", params)
        .then((res) => {
            const Array = res.data
            console.log(Array);
            setData(Array)

        })
        .catch((error) => {
            console.log(error)
        })

    }
    

    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
            
        })
        
    }
    // const dodajVozilo = (marka,model,vrsta,registracija,istek,slika) => {
    //     var params = new URLSearchParams();
        
        
    //      params.append('marka_vozila', marka);
    //      params.append('model_vozila', model);
    //      params.append('vrsta_vozila', vrsta);
    //      params.append('registracija', registracija);
    //      params.append('istek_registracije', istek);
    //      params.append('slika', slika);
    //      Axios.post("http://localhost/voznipark/src/API/dodaj.php", params)
    //      .then((response) => {
			
    //             console.log(response.data)
	// 			Navigate("/Pocetna", {replace:true})
			
	// 	})
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        let brojka = 0
        switch(formData.vrsta) {
            case "Automobil":
            brojka = 1;
            console.log("U??lo auto/kamion")
            break;

            case "Kamion":
            brojka = 1;
            console.log("U??lo auto/kamion")
            break;

            case "Motocikl":
            brojka = 2;
            console.log("U??lo motor")
            break;

            case "Radni stroj":
            brojka = 3;
            console.log("U??lo stroj")
            break;

        }
        
       // dodajVozilo(formData.marka, formData.model, formData.vrsta, format(value, 'yyyy-MM-dd'), format(add(value, {years:brojka}), 'yyyy-MM-dd'), formData.slika)
		console.log(formData);

    }
    
    return (
        <>
        <Navbar />
        <Form className = "dodajform">
        <h3 className = "dodajform-title">Zadu??i vozilo!</h3>
        <Form.Group className = "mb-4">
            <FloatingLabel
            label = "Marka vozila">

            <Form.Control 
            onChange = {handleChange} 
            name = "marka" 
            type = "text" 
            placeholder = "Audi/BMW/Mercedes..." 
            value = {formData.marka}
            />
            </FloatingLabel>
        </Form.Group>

        <Form.Group className = "mb-4">
            <FloatingLabel
            label = "Model vozila"
            >
            <Form.Control 
            onChange = {handleChange} 
            name = "model" 
            type = "text" 
            placeholder = "A3/C220/M5..." 
            value = {formData.model}
            />
            </FloatingLabel>
        </Form.Group>

        <Form.Group className = "mb-4">
            
            <Form.Select 
            onChange = {handleChange} 
            name = "vrsta" 
            value = {formData.vrsta}
            >
                <option>Vrsta vozila</option>
                <option>Automobil</option>
                <option>Motocikl</option>
                <option>Kamion</option>
                <option>Radni stroj</option>
            </Form.Select>
            
        </Form.Group>

        <Form.Group className = "mb-0">
        <Form.Label>Odaberi datum registracije</Form.Label>
        </Form.Group>
        <Form.Group className = "mb-4">
        <DatePicker
        name = "registracija" 
        onChange = {setValue}  
        value = {value}
        format = "dd.MM.yyyy"
        clearIcon = {null}
        locale = "hr-HR"


        />
        </Form.Group>

        <Form.Group className = "mb-4">
            <Form.Label>Odaberi sliku vozila!</Form.Label>
            <Form.Control 
            onChange = {handleChange} 
            type="text" 
            name = "slika" 
            value = {formData.slika}
            />
        </Form.Group>
        <Button variant = "success" onClick = {handleSubmit}>Dodaj</Button>
        </Form>
        </>
           
    )
}