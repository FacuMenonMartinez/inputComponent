import Input from "./Components/Input/Input";
import "./App.css";


function App() {
  return (
    <main>
      <h1>Inputs</h1>

      <section className="defaultSection">
        <div className="defaultItem">
          <label>Default input</label>
          <Input />
        </div>
        <div className="defaultItem">
          <label>&: hover</label>
          <Input />
        </div>
        <div className="defaultItem">
          <label>&: focus</label>
          <Input />
        </div>
      </section>

      <section className="errorSection">
        <div className="errorItem">
          <label>Error input</label>
          <Input color={'error'} />
        </div>
        <div className="errorItem">
          <label>&: hover</label>
          <Input />
        </div>
        <div className="errorItem">
          <label>&: focus</label>
          <Input color={'error'} />
        </div>
      </section>

      <section className="disabledSection">
        <div className="disabledItem">
          <lable>Disabled input</lable>
          <Input state={'disabled'} />
        </div>
      </section>

      <section className="helperTextSection">
        <div className="helperTextItem">
          <lable>Helper text input</lable>
          <Input state={'helper text'} type={'text'} helperText={'Some interesting text'} />
        </div>
        <div className="helperTextItem">
          <lable>Helper text input error</lable>
          <Input state={'helper text'} color={'error'} type={'text'} helperText={'Some interesting text'} />
        </div>
      </section>
      <section className="iconSection">

        <div className="iconItem">
          <lable>Left direction icon</lable>
          <Input state={'icon'} iconDirection={'left'} icon={'Call'} />
        </div>
        <div className="iconItem">
          <lable>Left direction icon</lable>
          <Input state={'icon'} iconDirection={'left'} icon={'face'} />
        </div>
        <div className="iconItem">
          <lable>Left direction icon</lable>
          <Input state={'icon'} iconDirection={'left'} icon={'account_circle'} />
        </div>
        <div className="iconItem">
          <lable>Right direction icon</lable>
          <Input state={'icon'} iconDirection={'right'} icon={'support_agent'} />
        </div>
        <div className="iconItem">
          <lable>Right direction icon</lable>
          <Input state={'icon'}  iconDirection={'right'} icon={'face'} />
        </div>
        <div className="iconItem">
          <lable>Right direction icon</lable>
          <Input state={'icon'} color="blue" iconDirection={'right'} icon={'account_circle'} />
        </div>
      </section>

      <section className="fullWidthSection">
        <div className="fullWidthItem">
          <label>Full width input</label>
          <Input size={'full-width'} color={"green"} />
        </div>
        <div className="fullWidthItem">
          <label>&: hover</label>
          <Input size={'full-width'} />
        </div>
        <div className="fullWidthItem">
          <label>&: focus</label>
          <Input size={'full-width'} color={"purple"} />
        </div>
      </section>

      <section className="multilineSection">
        <div className="multilineItem">
          <label>Multiline input</label>
          <Input state={'multiline'} type={'text'} />
        </div>
      </section>

    </main>

  );
}

export default App;
