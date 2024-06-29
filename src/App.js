import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/equipo';
import Footer from './componentes/Footer/index';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    nombre: "Harland Lohora",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    equipo: "Front End",
    fav: false
  },
  {
    id: uuid(),
    nombre: "Jose",
    puesto: "Instructor",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    equipo: "Programación",
    fav: false
  },
  {
    id: uuid(),
    nombre: "Jeanmarie",
    puesto: "Instructor",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    equipo: "Front End",
    fav: false
  },
  {
    id: uuid(),
    nombre: "Christian",
    puesto: "Instructor",
    foto: "https://github.com/christianpva.png",
    equipo: "Data Science",
    fav: false
  },
  ])

  const [equipos, actualizarEquipos] = useState([

    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },

    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },

    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])


  // ternario --> condicion ? seMuestra : noSeMuestra
  //condocion && seMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador);
    //Spread operator
    actualizarColaboradores([...colaboradores, {...colaborador, id: uuid()}])
  }

  //funcion eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log("eliminar colaborador");
    const nuevosColaboradores =
      colaboradores.filter((colaborador) =>
        colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores);

  }

  //actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar:", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log("Nuevo equipo", nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])

  }

  const like = (id) => {
    console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados);
  }
  return (
    <div>
      <Header />
      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar

      }
      />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.id}
          colaboradores=
          {colaboradores.filter
            (colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />

    </div>
  );
}

export default App;
