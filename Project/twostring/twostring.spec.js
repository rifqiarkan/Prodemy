import { expect } from "chai";
import twoStrings from "./twostring.js";

describe('2 string terdapat satu karakter yang sama', function() {

    it('Terdapat satu huruf sama, menghasilkan nilai YES', function() {
        expect(twoStrings('hebe', 'destri')).to.equal('YES')
    }),

    it('Terdapat dua huruf sama, menghasilkan nilai YES', function() {
        expect(twoStrings('hebe', 'suksesh')).to.equal('YES')
    }),

    it('Terdapat satu angka sama, menghasilkan nilai YES', function() {
        expect(twoStrings('12555', '1333')).to.equal('YES')
    }),

    it('Terdapat special karakter sama dan menghasilkan nilai YES', function() {
        expect(twoStrings('arkan$', '$eles@i')).to.equal('YES')
    }),

    it('terdapat hanya spasi pbada 2 string, menghasilkan nilai YES', function() {
        expect(twoStrings(' ', ' ')).to.equal('YES')
    })
})

describe('2 string tidak terdapat karakter yang sama', function() {

    it('tidak terdapat satupun huruf sama, menghasilkan nilai NO', function() {
        expect(twoStrings('arkan', 'hebe')).to.equal('NO')
    }),

    it('tidak terdapat karakter atau blank, menghasilkan nilai NO', function() {
        expect(twoStrings('', '')).to.equal('NO')
    }),

    it('Terdapat satu huruf sama tetapi kapital dan tidak kapital, menghasilkan nilai NO', function() {
        expect(twoStrings('Arki', 'adung')).to.equal('NO')
     })
     
    it('seharusnya @ tidak sama dengan a, menghasilkan nilai NO', function() {
        expect(twoStrings('@rk@n', 'ahmad')).to.equal('NO')
    })

    // it('terdapat hanya spasi ada 2 string, menghasilkan nilai YES', function() {
    //     expect(twoStrings(' ', ' ')).to.equal('YES')
    // })

})