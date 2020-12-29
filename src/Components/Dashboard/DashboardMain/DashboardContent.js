import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import GrapChart from './GrapChart';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import DashPiChart from './DashPiChart';
import './Dash.css';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
const DashboardContent = () => {
    return (
        <div className='m-5 p-4'>
            <div
                style={{
                    backgroundColor: '#F5F2F2'
                }}
                className='m-5 p-4'>
                <div className="row d-flex justify-content-between p-3">
                    <h3
                        style={{
                            fontFamily: 'Bien'
                        }}>Performance</h3>
                    <select className='p-2'>
                        <option>Últimos 7 días</option>
                    </select>
                </div>
                <div className="row p-3">
                    <div
                        className="col-md-7 pt-2 pb-5"
                        style={{
                            backgroundColor: 'white'
                        }}>
                        <h5
                            style={{
                                fontFamily: 'Bien'
                            }}>Ventas</h5>
                        <div className="d-flex justify-content-between mt-4 ml-3">
                            <div
                                className='LeftSize text-center'
                                style={{
                                    borderRight: '1px solid gray',
                                    paddingRight: '15%'
                                }}>
                                <h6>19,00
                                    <CheckCircleIcon
                                        style={{
                                            color: '#50D6C1'
                                        }}/></h6>
                                <small className='text-secondary'>Ventas concretadas</small>
                            </div>
                            <div
                                className='LeftSize text-center'
                                style={{
                                    borderRight: '1px solid gray',
                                    paddingRight: '15%'
                                }}>
                                <h6>19,00
                                    <CancelIcon
                                        style={{
                                            color: '#F56060'
                                        }}/></h6>
                                <small className='text-secondary'>Ventas canceladas</small>
                            </div>
                            <div
                                className='LeftSize text-center'
                                style={{
                                    paddingRight: '10%'
                                }}>
                                <h6>19,00
                                </h6>
                                <small className='text-secondary'>Cantidad de productos</small>
                            </div>

                        </div>
                        <h5
                            style={{
                                fontFamily: 'Bien',
                                borderTop: '20px solid #F5F2F2'
                            }}
                            className='mt-5 pt-3'>Subastas</h5>
                        <div className="d-flex justify-content-between mt-4 ml-3">
                            <div
                                className='LeftSize text-center'
                                style={{
                                    borderRight: '1px solid gray',
                                    paddingRight: '15%'
                                }}>
                                <h6>19,00
                                </h6>
                                <small className='text-secondary'>Subastas activas</small>
                            </div>
                            <div
                                className='LeftSize text-center'
                                style={{
                                    borderRight: '1px solid gray',
                                    paddingRight: '15%'
                                }}>
                                <h6>19,00
                                </h6>
                                <small className='text-secondary'>Subastas finalizadas</small>
                            </div>
                            <div
                                className='LeftSize text-center'
                                style={{
                                    paddingRight: '10%'
                                }}>
                                <h6>19,00
                                </h6>
                                <small className='text-secondary'>Vendedores</small>
                            </div>

                        </div>
                        <h5
                            style={{
                                fontFamily: 'Bien',
                                borderTop: '20px solid #F5F2F2'
                            }}
                            className='mt-5 pt-3'>Catálogos</h5>
                        <div className="d-flex justify-content-between mt-4 ml-3">
                            <div
                                className='LeftSize text-center'
                                style={{
                                    borderRight: '1px solid gray',
                                    paddingRight: '15%'
                                }}>
                                <h6>19,00
                                </h6>
                                <small className='text-secondary'>Total de sellos</small>
                            </div>
                            <div
                                className='LeftSize text-center'
                                style={{
                                    borderRight: '1px solid gray',
                                    paddingRight: '15%'
                                }}>
                                <h6>19,00
                                </h6>
                                <small className='text-secondary'>Usuarios con listas activas</small>
                            </div>
                            <div
                                className='LeftSize text-center'
                                style={{
                                    paddingRight: '10%'
                                }}>
                                <h6>19,00
                                </h6>
                                <small className='text-secondary'>Sellos en todas
                                    <br/>
                                    las mancolistas</small>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-5">
                        <GrapChart/>
                        <div
                            className="mt-3 p-5"
                            style={{
                                backgroundColor: 'white'
                            }}>
                            <h5
                                style={{
                                    fontFamily: 'Bien'
                                }}>Usuarios</h5>
                            <div className="mt-5 text-center">
                                <h3>11,495</h3>
                                <p className="text-secondary">Total de usuarios activos</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div
                style={{
                    backgroundColor: '#F5F2F2'
                }}
                className='m-5 p-4'>
                <div className="row d-flex justify-content-between p-3">
                    <h3
                        style={{
                            fontFamily: 'Bien'
                        }}>Tienda</h3>
                    <select className='p-2'>
                        <option>Últimos 7 días</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <div
                            style={{
                                backgroundColor: 'white'
                            }}
                            className="p-3">
                            <div className="d-flex justify-content-between">
                                <h5
                                    style={{
                                        fontFamily: "Bien"
                                    }}>Productos</h5>
                                <AddCircleIcon/>
                            </div>
                            <div className="text-center mt-3">
                                <h2>172</h2>
                                <p className="text-secondary mt-2">Productos activos</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div
                            style={{
                                backgroundColor: 'white'
                            }}
                            className="p-3">
                            <div className="d-flex justify-content-between">
                                <h5
                                    style={{
                                        fontFamily: "Bien"
                                    }}>Categorías</h5>
                            </div>
                            <div className="text-center mt-3 d-flex justify-content-between pl-5 pr-5">
                                <div>
                                    <h2>172</h2>
                                    <p className="text-secondary mt-2">Filatelia</p>
                                </div>
                                <div>
                                    <h2>172</h2>
                                    <p className="text-secondary mt-2">Numismática</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div
                            style={{
                                backgroundColor: 'white'
                            }}
                            className="p-3">
                            <div className="d-flex justify-content-between">
                                <h5
                                    style={{
                                        fontFamily: "Bien"
                                    }}>Pedidos</h5>
                            </div>
                            <div className="text-center mt-3 d-flex justify-content-between pl-5 pr-5">
                                <div>
                                    <h2>172
                                        <FiberManualRecordIcon
                                            fontSize="small"
                                            style={{
                                                color: '#F7D45F'
                                            }}/></h2>
                                    <p className="text-secondary mt-2">Pedidos</p>
                                </div>
                                <div>
                                    <h2>172
                                        <FiberManualRecordIcon
                                            fontSize="small"
                                            style={{
                                                color: '#28EF46'
                                            }}/></h2>
                                    <p className="text-secondary mt-2">Numismática</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-2">
                        <div
                            style={{
                                backgroundColor: 'white'
                            }}
                            className="p-3 pb-4">
                            <div className="d-flex justify-content-between">
                                <h5
                                    style={{
                                        fontFamily: "Bien"
                                    }}>Cupones</h5>

                            </div>
                            <div className="text-center mt-3">
                                <h2>3</h2>
                                <p className="text-secondary mt-2">Cupones disponibles</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div
                            style={{
                                backgroundColor: 'white'
                            }}
                            className="p-3 pb-4">
                            <div className="d-flex justify-content-between">
                                <h5
                                    style={{
                                        fontFamily: "Bien"
                                    }}>Informes</h5>
                                <AddCircleIcon/>
                            </div>
                            <div className="text-center mt-3">
                                <small className="text-secondary mt-2">Semanal</small><br/>
                                <small className="text-secondary mt-2">Mensual</small><br/>
                                <small className="text-secondary mt-2">Trimestral</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div
                            style={{
                                backgroundColor: 'white',
                                height: '70%'
                            }}
                            className="p-3">
                            <div className="d-flex justify-content-between">
                                <h5
                                    style={{
                                        fontFamily: "Bien"
                                    }}>Clientes</h5>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="text-center mt-4">
                                        <h2>3</h2>
                                        <p className="text-secondary mt-2">Totales</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="text-center mt-4">
                                        <h2>3</h2>
                                        <p className="text-secondary mt-2">Clientes nuevos</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="text-center mt-4">
                                        <h2>3</h2>
                                        <p className="text-secondary mt-2">Clientes recurrentes</p>
                                    </div>

                                </div>
                                <div className="col-md-3">
                                    <div className="text-center fullAreaOfPieCHartr">
                                        <div className='PichartPositionChange'>
                                            <DashPiChart/>
                                        </div>
                                        <p className="text-secondary mt-2">Cupones disponibles</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div
                style={{
                    backgroundColor: '#F5F2F2'
                }}
                className='m-5 p-4'>
                <div className="row d-flex justify-content-between p-3">
                    <h3
                        style={{
                            fontFamily: 'Bien'
                        }}>Blog</h3>
                    <select className='p-2'>
                        <option>Últimos 7 días</option>
                    </select>
                </div>
                <div className="row">

                    <div className="col-md-5">
                        <div
                            style={{
                                backgroundColor: 'white',
                                height: '80%'
                            }}
                            className="p-3">
                            <div className="d-flex justify-content-between">
                                <h5
                                    style={{
                                        fontFamily: "Bien"
                                    }}>Entradas</h5>
                                <AddCircleIcon/>
                            </div>
                            <div className="text-center mt-3 d-flex justify-content-between pl-5 pr-5">
                                <div>
                                    <h2>
                                        3
                                        <AddCircleIcon
                                            style={{
                                                color: '#50D6C1'
                                            }}/></h2>
                                    <p className="text-secondary mt-2">Entradas nuevas</p>
                                </div>
                                <div>
                                    <h2>0
                                        <RemoveCircleIcon
                                            style={{
                                                color: '#F56060'
                                            }}/></h2>
                                    <p className="text-secondary mt-2">Entradas eliminadas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div
                            style={{
                                backgroundColor: 'white',
                                height: '80%'
                            }}
                            className="p-3">
                            <div className="d-flex justify-content-between">
                                <h5
                                    style={{
                                        fontFamily: "Bien"
                                    }}>Vistas</h5>
                            </div>
                            <div className="text-center mt-3 d-flex justify-content-between pl-5 pr-5">
                                <div>
                                    <h2>172
                                        <FiberManualRecordIcon
                                            fontSize="small"
                                            style={{
                                                color: '#F7D45F'
                                            }}/></h2>
                                    <p className="text-secondary mt-2">Vistas nuevas</p>
                                </div>
                                <div>
                                    <div className="text-center fullAreaOfPieCHartr">
                                        <div className='PichartPositionChange'>
                                            <DashPiChart/>
                                        </div>
                                        <p className="text-secondary mt-2">Porcentaje de rebote</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div
                            style={{
                                backgroundColor: 'white',
                                height: '80%'
                            }}
                            className="p-3">
                            <div className="text-center">
                                <h5
                                    style={{
                                        fontFamily: "Bien"
                                    }}>Entrada más vista</h5>
                                <p>5 Formas de conservar sellos</p>
                                <small className='text-secondary'>12-dic-2020</small>
                            </div>
                            <div className="text-center mt-3">
                                <h5>12</h5>
                                <p className="text-secondary mt-2">Vistas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;