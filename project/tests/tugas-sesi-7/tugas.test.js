import fetch from "node-fetch"
import { expect } from "chai";
import Ajv from "ajv";
import schema_bankDataRequest from "../schema/tugasSchema.js";

describe("API Test Suite coba", function(){

    it("Get bank account data request", async function(){
        // tembak url 
        const hasil = await fetch('https://api.iluma.ai/v1.1/identity/bank_account_data_requests/bknv_6a2963f06540322bbff05a51', {
            headers: {
                "authorization": "Basic aWx1bWFfZGV2ZWxvcG1lbnRfRlg0ZjBNNXN4RGdrNXFGeVpuazYwWmVuZ0FmQTlvMzF4M2VjZDI5dmloamM0Vmh5SjhGY2xaaEhqanc6"
            }
        })

        // validasi http status nya harus 200
        expect(hasil.status).to.equal(200)

    });

    it("Create Bank Account Data Request", async function(){
        const requestData = {
            bank_account_number: "12345670",
            bank_code: "BCA",
            given_name: "FIRA DIYANKA",    
            surname: "FIRA DIYANKA",    
            reference_id: "testing123-456" 
        }

        const hasilpost = await fetch('https://api.iluma.ai/v1.1/identity/bank_account_data_requests', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "authorization": "Basic aWx1bWFfZGV2ZWxvcG1lbnRfRlg0ZjBNNXN4RGdrNXFGeVpuazYwWmVuZ0FmQTlvMzF4M2VjZDI5dmloamM0Vmh5SjhGY2xaaEhqanc6"
            },
            body: JSON.stringify(requestData)
        })

        expect(hasilpost.status).to.equal(200)

        const ajv = new Ajv()
        const data = await hasilpost.json();
        const cekcek = ajv.compile(schema_bankDataRequest)
        const hasil_validasi = cekcek(data)

        expect(hasil_validasi).to.be.true
    });

})