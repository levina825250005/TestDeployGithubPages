import React, { useState } from "react";

function App() {
    const [teks, setTeks] = useState(' ');

    return (
        <div>
            <h2>Input Teks</h2>
            <div>
                <input
                    type="text"
                    value={teks}
                    onChange={(e) => setTeks(e.target.value)}
                    placeholder="Ketik sesuatu di sini...."
                />
                <p>Hasil inputan: {teks}</p>
            </div>
        </div>
    );
}
export default App;