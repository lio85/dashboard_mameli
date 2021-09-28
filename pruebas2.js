let a = [{nombre:"lio", edad:36, promedioAnual: 3},{nombre:"meli",edad:26, promedioAnual: 2},{nombre:"maggie",edad:28, promedioAnual: 1}]
let suma=0;
let b=[]

a.map(compa => { 
    let object={
        nombre: compa.nombre
    }
    b.push(object);
    suma+=compa.edad * compa.promedioAnual;
    return 
})
console.log(suma);
console.log(b);

/* function Anchor1() {
    return (
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div class="sidebar-brand-icon">
                <i class="fas fa-chart-line"></i>
            </div>
        <div class="sidebar-brand-text mx-3">Admin</div>
    </a>
    );
  }
  
  export default Anchor1; */