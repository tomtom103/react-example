import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../theme";
import { GlobalStyles } from "../../global";
import { CustomButton, CustomButtonClass } from "../../components/index";
import { CanvasFunction } from '../../components/CanvasElement/index'

function App() {
  /**
   * Allows you to keep a state in the component memory
   * This allows you to easily implement conditional logic in your components
   * If a component requires more complex logic, please use a Class Component
   * Class Component examples can be found in the components folder
   */
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  /**
   * 
   * @param {CanvasRenderingContext2D} ctx 
   * @param {*} frameCount 
   */
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = theme === "light" ? lightTheme.secondary : darkTheme.secondary;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <CustomButton onClick={toggleTheme}>Function Button</CustomButton>
        <CustomButtonClass onClick={toggleTheme}>Class Button</CustomButtonClass>
        <h1>Using the {theme} Theme!</h1>
        <CanvasFunction draw={draw} width={325} height={150} />
        <footer></footer>
      </>
    </ThemeProvider>
  );
};

/**
 * This function could have also been written as a Class Component
 * See below to understand how this is done
 */


// class AppButClass extends React.Component {
//   constructor() {
//     this.state = {
//       theme: "lignt",
//     }
//   };

//   toggleTheme() {
//     this.setState({
//       theme: this.state.theme === "light" ? "dark" : "light",
//     });
//   }

//   render() {
//     return (
//       <ThemeProvider theme={this.theme === "light" ? lightTheme : darkTheme}>
//         <>
//           <GlobalStyles />
//           <button onClick={this.toggleTheme}>Toggle Theme</button>
//           <h1>Using the Light Theme!</h1>
//           <footer></footer>
//         </>
//       </ThemeProvider>
//     );
//   }
// }

export default App;
