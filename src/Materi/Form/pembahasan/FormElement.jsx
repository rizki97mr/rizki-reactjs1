import React from "react";
import './index.module.css'

export default class FormElement extends React.Component {
    state = {
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        member: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(`
        nama: ${this.state.nama}
        jurusan: ${this.state.jurusan}
        gender: ${this.state.gender}
        alamat: ${this.state.alamat}
        member: ${this.state.member ? 'YES' : "NO"}
        `);
        this.setState ({
            nama: '',
            jurusan: '',
            gender: '',
            alamat: '',
            member: false
        })
    }

    render () {
        return (
            <div className="form">
                <div className="form-body">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Nama : <input 
                            type="text" 
                            name="name" 
                            defaultValue={this.props.nama}
                            onChange={ e => this.setState({nama: e.target.value})}/>
                        </label>
                        <br />
                        <label>
                            Jurusan : <select name="jurusan" onChange={ e => this.setState({jurusan: e.target.value})}>
                                <option value="">Pilih Jurusan</option>
                                <option value="Teknik informatika">Teknik informatika</option>
                                <option value="Sistem Informasi">Sistem Informasi</option>
                                <option value="Teknik Komputer">Teknik Komputer</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            Jenis Kelamin : 
                            <input type="radio" value="Pria" name="gender"
                            onChange={ e => this.setState({gender: e.target.value})}/>Pria
                            <input type="radio" value="Wanita" name="gender"
                            onChange={ e => this.setState({gender: e.target.value})}/>Wanita
                        </label>
                        <br />
                        <label>
                            Alamat: <textarea name="alamat" id="" cols="30" rows="5"
                            onChange={e => this.setState({alamat: e.target.value})}></textarea>
                        </label>
                        <br />
                        <label>
                            Member : <input type="checkbox" checked={this.state.member} name="member"
                            onChange={e => this.setState({member: e.target.checked})}/>
                        </label>
                        <br />
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>    
            </div>
        )
    }
}