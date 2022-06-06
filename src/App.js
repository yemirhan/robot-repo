import { Button, Divider, Slider, Title } from "@mantine/core";

import { useEffect, useState } from "react";
import getDatabase from "./firebase";
import { onValue, ref, set } from "firebase/database";

function App() {
  const [slider, setSlider] = useState(2)
  const [data, setData] = useState(
    { ST: false, Sure: 2, motor: '1' }
  )
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const db = getDatabase
    const starCountRef = ref(db, '/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      setData(data);
      setLoading(false)
    }, (error) => { console.log(error); });
  }, [])
  function writeEngineChange(ST) {
    const db = getDatabase
    set(ref(db), {
      ST,
      Sure: data.Sure,
      motor: data.motor
    });
  }
  function updateTime(time) {
    const db = getDatabase
    set(ref(db), {
      ST: data.ST,
      Sure: time,
      motor: data.motor
    });
  }
  function wasdstop(motor) {
    const db = getDatabase
    set(ref(db), {
      ST: data.ST,
      Sure: data.Sure,
      motor
    });
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return <div>
    <Title order={1}>IoT CAR</Title>
    <Slider min={1} max={5} mt={`sm`} value={slider} onChange={setSlider} style={{ width: 250 }}></Slider>
    <div>{`Value: ${slider}`}</div>
    <div style={{ marginTop: 12 }}>
      <Button onClick={() => writeEngineChange(true)} disabled={data.ST === true} mr={'sm'}>
        Motoru ac
      </Button>
      <Button onClick={() => writeEngineChange(false)} disabled={data.ST === false}>
        Motoru kapa
      </Button>
    </div>
    <Divider mt={`sm`}></Divider>
    <Button onClick={() => updateTime(slider)} mt={'sm'}>Sureyi guncelle</Button>
    <Divider mt={`sm`}></Divider>
    <div style={{ marginTop: 12 }}>
      <Button variant={data.motor === '1' ? 'filled' : 'light'} onClick={() => wasdstop('1')} mr={'sm'}>Ileri</Button>
      <Button variant={data.motor === '2' ? 'filled' : 'light'} onClick={() => wasdstop('2')} mr={'sm'}>Geri</Button>
      <Button variant={data.motor === '3' ? 'filled' : 'light'} onClick={() => wasdstop('3')} mr={'sm'}>Sol</Button>
      <Button variant={data.motor === '4' ? 'filled' : 'light'} onClick={() => wasdstop('4')} mr={'sm'}>Sag</Button>
      <Button variant={data.motor === '5' ? 'filled' : 'light'} onClick={() => wasdstop('5')}>Dur</Button>
    </div>
  </div>

}

export default App;
