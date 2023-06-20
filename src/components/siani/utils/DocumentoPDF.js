import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import LogoIPN from '../../../images/report/logo_IPN.png';
import LogoCITTA from '../../../images/report/logociita.png';
import LogoSIANI from '../../../images/report/sianilogo.png';
import WaterMark from '../../../images/report/watermark.png';
import ItalicFont from '../../../images/report/Roboto-Italic.ttf';

export default class DocumentoPDF extends Component {
    render() {
        // Register font
        Font.register({ 
            family: 'Oswald', fonts: [
                { src:  ItalicFont}, // font-style: normal, font-weight: normal
                { src: '<italics_oswald_source>', fontStyle: 'italic' },
                { src: '<bold_oswald_source>', fontWeight: 'bold' },
               ]
        });

        const styles = StyleSheet.create({
            page: {
              backgroundColor: '#FFFFFF',
              flexDirection:'column',
            },
            header: {
                flexDirection: 'row',
                flexBasis: 'auto',
                fontSize: 24,
                marginHorizontal: 30
            },
            logo: {
                height: 'auto',
                width: '60px',
                margin: 10,
            },
            headerText: {
                top: 50,
                flex: 1,
                textAlign: 'center'
            },
            section:{
                flexDirection:'column',
                left: 40,
                fontSize: 14,
                marginRight: 80
            },
            tittle:{
                textAlign: 'center',
                fontSize: 18,
                margin: 15,
                color: '#682444',
                fontFamily: 'Oswald',
                
                
            },
            footer:{
                top: 170,
                flexDirection: 'row-reverse',
                textAlign: 'left',
                left: 30
            },
            textFooter: {
                fontSize: 12,
                top: 35,
            },
            answer: {
                left: 30,
                marginVertical: 1,
            },
            info:{
                flexDirection: 'row',
                marginTop: 15,
                
            },
            watermark:{
                left: 30,
                margin: 40,
                
            }
          });
        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.header}>
                        <Image src={LogoIPN} style={styles.logo}/>
                        <Text style={styles.headerText}>{''+this.props.NomEncuesta}</Text>
                        <Image src={LogoSIANI} style={styles.logo}/>
                        
                    </View>
                    <View style={styles.info}>
                        <View style={styles.section}>
                            <Text>{'Nombre de la empresa: '}</Text>
                            <Text style={styles.answer}>{'- '+this.props.NomEmpresa}</Text>
                            <Text>{'Persona de contacto: '}</Text>  
                            <Text style={styles.answer}>{'- '+this.props.PerContact}</Text>
                            <Text>{'Teléfono: '}</Text>
                            <Text style={styles.answer}>{'- '+this.props.Telefono}</Text>
                            <Text>{'Correo electrónico: '}</Text>
                            <Text style={styles.answer}>{'- '+this.props.Correo}</Text>
                            <Text>{'Años de haberse constituido: '}</Text>
                            <Text style={styles.answer}>{'- '+this.props.AnCos}</Text>
                            <Text>{'Numero de Empleados: '}</Text>
                            <Text style={styles.answer}>{'- '+this.props.NumEmpleados}</Text>
                            <Text>{'Mercado al que atiende: '}</Text>
                            <Text style={styles.answer}>{'- '+this.props.MercadoAt.replaceAll('null', "")}</Text>
                            <Text>{'Otros: '}</Text>
                            <Text style={styles.answer}>{'- '+this.props.Otros.replaceAll('null', "")}</Text>
                        </View>
                        <Image src={WaterMark} style={styles.watermark}/>
                    </View>
                        
                    <View style={styles.tittle}>
                        <Text >{'Información organizacional'}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{'¿Cuenta perfiles de puesto? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.InfoOrg1.replaceAll('null', "")}</Text>  
                        <Text>{'¿Realiza evaluaciones anuales de desempeño? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.InfoOrg2.replaceAll('null', "")}</Text>    
                        <Text>{'¿Mide el índice de rotación de la empresa? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.InfoOrg3.replaceAll('null', "")}</Text>  
                        <Text>{'¿Cuenta con un plan de desarrollo para sus empleados? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.InfoOrg4.replaceAll('null', "")}</Text>  
                        <Text>{'¿Cuenta con matriz de habilidades? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.InfoOrg5.replaceAll('null', "")}</Text>  
                        <Text>{'¿Cuenta con un plan de inducción? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.InfoOrg6.replaceAll('null', "")}</Text>  
                        <Text>{'¿Realiza planeación estratégica? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.InfoOrg7.replaceAll('null', "")}</Text>  
                        <Text>{'Estrategia de la Alta Gerencia: '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.InfoOrg8.replaceAll('null', "")}</Text>  
                        <Text>{'¿Analiza las razones financieras de su empresa? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.InfoOrg9.replaceAll('null', "")}</Text>  
                        <Text>{'¿Cuáles son los términos de pago que maneja con los clientes? (Días)'}</Text>  
                        <Text style={styles.answer}>{'- '+this.props.InfoOrg10.replaceAll('null', "")}</Text>  
                        <Text>{'¿Otro termino de pago que maneje con sus clientes? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.InfoOrg11.replaceAll('null', "")}</Text>
                    </View>
                </Page>
                <Page>
                    <View style={styles.header}>
                        <Image src={LogoIPN} style={styles.logo}/>
                        <Text style={styles.headerText}>{''+this.props.NomEncuesta}</Text>
                        <Image src={LogoSIANI} style={styles.logo}/>
                    </View>
                    <View style={styles.tittle}>
                        <Text >{'Asesoría y capacitación'}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{'¿Cuenta con un plan de capacitación anual? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.AseCap1.replaceAll('null', "")}</Text>  
                        <Text>{'¿Invierte anualmente en capacitación? (MXN)'}</Text>  
                        <Text style={styles.answer}>{'- '+this.props.AseCap2.replaceAll('null', "")}</Text>  
                        <Text>{'¿Areas de especialidad donde cree conveniente solicitar servicios de capacitación? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.AseCap3.replaceAll('null', "")}</Text>  
                        <Text>{'¿Invierte en capacitaciones o certificaciones fuera del País? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.AseCap4.replaceAll('null', "")}</Text>  
                        <Text>{'¿Invierte en certificaciones? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.AseCap5.replaceAll('null', "")}</Text>  
                        <Text>{'¿Invierte anualmente en asesoría? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.AseCap6.replaceAll('null', "")}</Text>  
                        <Text>{'¿En qué área de especialidad considera una Asesoría / Consultoría más apropiada para su empresa? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.AseCap7.replaceAll('null', "")}</Text>  
                        <Text>{'¿Invierte anualmente en desarrollo de productos I+D+i (Investigación, Desarrollo e innovación)? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.AseCap8.replaceAll('null', "")}</Text>  
                        <Text>{'¿Cuál laboratorio considera mas relevante para impulsar el crecimiento de su empresa? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.AseCap9.replaceAll('null', "")}</Text>  
                        <Text>{'¿En cuál de estos aspectos considera importante invertir? '}</Text> 
                        <Text style={styles.answer}>{'- '+this.props.AseCap10.replaceAll('null', "")}</Text>   
                        <Text>{'¿Subcontrata alguno de los siguientes servicios tecnológicos?'}</Text>  
                        <Text style={styles.answer}>{'- '+this.props.AseCap11.replaceAll('null', "")}</Text>  
                        <Text>{'¿Tiene interés por los proyectos tecnológicos de CONACyT?'}</Text>  
                        <Text style={styles.answer}>{'- '+this.props.AseCap12.replaceAll('null', "")}</Text>
                        <Text>{'¿Cuál(es) opciones tiene mayor prioridad para la empresa?'}</Text>  
                        <Text style={styles.answer}>{'- '+this.props.AseCap13.replaceAll('null', "")}</Text>  
                    </View>
                    <View style={styles.tittle}>
                        <Text >{'Procesos'}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{'¿Utiliza alguna de las siguientes herramientas de software especializado en su empresa? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.Proc1.replaceAll('null', "")}</Text>  
                        <Text>{'¿Cuenta con indicadores de desempeño?'}</Text>  
                        <Text style={styles.answer}>{'- '+this.props.Proc2.replaceAll('null', "")}</Text>  
                        <Text>{'¿Cuenta con un sistema de gestión de calidad? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.Proc3.replaceAll('null', "")}</Text>  
                    </View>
                </Page>
                <Page>
                    <View style={styles.header}>
                        <Image src={LogoIPN} style={styles.logo}/>
                        <Text style={styles.headerText}>{''+this.props.NomEncuesta}</Text>
                        <Image src={LogoSIANI} style={styles.logo}/>
                    </View>
                    
                    <View style={styles.section}>
                        <Text>{'¿Cuenta con controles de calidad? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.Proc4.replaceAll('null', "")}</Text>  
                        <Text>{'¿Cuáles métodos de inspección de calidad emplea? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.Proc5.replaceAll('null', "")}</Text>  
                        <Text>{'¿Conoce las restricciones de su proceso de producción (cuellos de botella)? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.Proc6.replaceAll('null', "")}</Text>  
                        <Text>{'¿Qué procesos y tecnologías utiliza en su empresa? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.Proc7.replaceAll('null', "")}</Text>  
                        <Text>{'¿Utiliza alguna técnica de control de inventarios? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.Proc8.replaceAll('null', "")}</Text>  
                        <Text>{'¿Utiliza algún método para planear la producción? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.Proc9.replaceAll('null', "")}</Text>  
                        <Text>{'¿Cuentas con un sistema de seguridad industrial? '}</Text> 
                        <Text style={styles.answer}>{'- '+this.props.Proc10.replaceAll('null', "")}</Text>   
                        <Text>{'¿Emplea alguna herramientas de Lean Manufacturing?'}</Text>  
                        <Text style={styles.answer}>{'- '+this.props.Proc11.replaceAll('null', "")}</Text>  
                        <Text>{'¿Tiene contemplado emplear alguna de las siguientes herramientas de la industria 4.0? ¿Cuál?'}</Text>  
                        <Text style={styles.answer}>{'- '+this.props.Proc12.replaceAll('null', "")}</Text>  
                    </View>
                    <View style={styles.tittle}>
                        <Text >{'Marketing y ventas'}</Text>
                    </View>
                    <View style={styles.section}> 
                        <Text>{'¿Cómo capta a sus clientes? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.MarkVent1.replaceAll('null', "")}</Text>  
                        <Text>{'Escriba otra forma: '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.MarkVent7.replaceAll('null', "")}</Text>  
                        <Text>{'¿Le interesa invertir en una estrategia de marketing? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.MarkVent2.replaceAll('null', "")}</Text>  
                        <Text>{'¿Recibe retroalimentación del cliente?'}</Text>
                        <Text style={styles.answer}>{'- '+this.props.MarkVent3.replaceAll('null', "")}</Text>  
                        <Text>{'¿Mide la satisfacción del cliente?'}</Text>
                        <Text style={styles.answer}>{'- '+this.props.MarkVent4.replaceAll('null', "")}</Text>  
                        <Text>{'¿Ofrece algún programa de servicio post venta?'}</Text>
                        <Text style={styles.answer}>{'- '+this.props.MarkVent5.replaceAll('null', "")}</Text>  
                        <Text>{'¿Exporta su producto?'}</Text>
                        <Text style={styles.answer}>{'- '+this.props.MarkVent6.replaceAll('null', "")}</Text>  
                        
                    </View>
                </Page>
                <Page>
                    <View style={styles.header}>
                        <Image src={LogoIPN} style={styles.logo}/>
                        <Text style={styles.headerText}>{''+this.props.NomEncuesta}</Text>
                        <Image src={LogoSIANI} style={styles.logo}/>
                    </View>
                    <View style={styles.tittle}>
                        <Text >{'Estado futuro'}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{'En los próximos 3 años, contempla: '}</Text>
                        <Text>{'¿Invertir en nuevos procesos y/o tecnologías?'}</Text>
                        <Text style={styles.answer}>{'- '+this.props.EstFut1.replaceAll('null', "")}</Text>  
                        <Text>{'¿Emplear alguna herramientas de la Industria 4.0? '}</Text>
                        <Text style={styles.answer}>{'- '+this.props.EstFut2.replaceAll('null', "")}</Text>  
                        <Text>{'¿Emplear alguna herramientas de Lean Manufacturing?'}</Text>
                        <Text style={styles.answer}>{'- '+this.props.EstFut3.replaceAll('null', "")}</Text>  
                        <Text>{'¿Tiene contemplado invertir en alguno de los siguientes servicios de mejora a la organización?'}</Text>
                        <Text style={styles.answer}>{'- '+this.props.EstFut4.replaceAll('null', "")}</Text>  
                        <Text>{'¿Subcontratar algún servicio de tecnología?'}</Text>
                        <Text style={styles.answer}>{'- '+this.props.EstFut5.replaceAll('null', "")}</Text>  
                    </View>
                    <View style={styles.tittle}>
                        <Text >{'FORTALEZAS'}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{'Describe las principales fortalezas de tu empresa:'}</Text>
                        <Text style={styles.answer}>{'- '+this.props.Fort1.replaceAll('null', "")}</Text> 
                        <Text style={styles.answer}>{'- '+this.props.Fort2.replaceAll('null', "")}</Text>  
                        <Text style={styles.answer}>{'- '+this.props.Fort3.replaceAll('null', "")}</Text>   
                    </View>
                    <View style={styles.tittle}>
                        <Text >{'AREAS DE OPORTUNIDAD'}</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>{'Describe el tipo de apoyo que te gustaría recibir de un Centro de Innovación como el CIITA Cd. Juárez Chihuahua:'}</Text>
                        <Text style={styles.answer}>{'- '+this.props.AreaOp1.replaceAll('null', "")}</Text>  
                        <Text style={styles.answer}>{'- '+this.props.AreaOp2.replaceAll('null', "")}</Text>  
                        <Text style={styles.answer}>{'- '+this.props.AreaOp3.replaceAll('null', "")}</Text>  
                    </View>
                    <View style={styles.footer}>
                        <Image src={LogoCITTA} style={styles.logo}/>
                        <Text style={styles.textFooter}>{'Powered by CITTA'}</Text>
                    </View>
                </Page>
            </Document>
        )
    }
}
