import React from "react";

const ProgramTable = () => {
  return (
    <div className="p-6 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Unang Araw – May 28, 2026</h2>

      <table className="w-full  border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Oras</th>
            <th className="p-2 text-left">Bahagi</th>
            <th className="p-2 text-left">Tagapagsalita</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">7:30 – 8:00 AM</td>
            <td className="p-2">Pagpapatala ng mga Kalahok</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className="p-2">8:00 – 9:00 AM</td>
            <td className="p-2">Pabbubukas ng Programa</td>
            <td className="p-2 font-semibold"></td>
          </tr>

          <tr>
            <td className="p-2"></td>
            <td className="p-2">Pambungad na Panalangin</td>
            <td className="p-2 font-semibold">Regene Eugenio</td>
          </tr>

          <tr>
            <td className="p-2"></td>
            <td className="p-2">Pambansang Awit</td>
            <td className="p-2 font-semibold">Jowemai Pasngadan</td>
          </tr>

          <tr>
            <td className="p-2"></td>
            <td className="p-2">Pananalitang Pagtanggap at Mensahe</td>
            <td className="p-2">
              <span className="font-semibold">Regene Eugenio</span>
              <br />
              <span className="italic text-xs">
                Punong Lalawigan ng Ilocos Sur
              </span>
            </td>
          </tr>

          <tr>
            <td className="p-2"></td>
            <td className="p-2">Tunguhin ng Gawain</td>
            <td className="p-2">
              <span className="font-semibold">Ray S. Naguit, Ph.D.</span>
              <br />
              <span className="italic text-xs">
                Pangulo, GNB, Bulacan State University
              </span>
            </td>
          </tr>

          <tr>
            <td className="p-2">9:00 – 10:00 AM</td>
            <td className="p-2 ">Paunang Pananalita</td>
            <td className="p-2">
              <span className="font-semibold">
                Regaldo Trota Jose Jr., Ph.D.
              </span>
              <br />
              <span className="italic text-xs">Chairperson, NHCP</span>
            </td>
          </tr>

          <tr>
            <td className="p-2">10:00 – 10:15 AM</td>
            <td className="p-2">Salo-salo sa Minandal</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className="p-2">10:15 – 11:45 AM</td>
            <td className="p-2 ">Rizal sa Dunong Bayan</td>
            <td className="p-2">
              <span className="font-semibold">Maryjane G. Tatel, Ph.D</span>
              <br />
              <span className="italic text-xs">UP Diliman</span>
            </td>
          </tr>

          <tr>
            <td className="p-2">11:45 AM – 12:15 PM</td>
            <td className="p-2">Salo-salo sa Tanghalian</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className="p-2">12:15 – 01:45 PM</td>
            <td className="p-2 ">Kabansaan, Kalayaan, Kaunlaran</td>
            <td className="p-2">
              <span className="font-semibold">Marot Nelmida Flores, Ph.D.</span>
              <br />
              <span className="italic text-xs">UP Diliman</span>
            </td>
          </tr>

          <tr>
            <td className="p-2">01:15 – 03:15 PM</td>
            <td className="p-2 ">Rizal at Diwa ng Los Agricultures</td>
            <td className="p-2">
              <span className="font-semibold">Shane Velasco</span>
              <br />
              <span className="italic text-xs">Bulacan State University</span>
            </td>
          </tr>

          <tr>
            <td className="p-2">03:15 – 03:30 PM</td>
            <td className="p-2">Salo-salo sa Minandal</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className="p-2">01:15 – 03:15 PM</td>
            <td className="p-2 ">Rizal at Usaping Pangkasarian</td>
            <td className="p-2">
              <span className="font-semibold">Nancy Kimuel Gabriel</span>
              <br />
              <span className="italic text-xs">UP Diliman</span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Second Table */}
      <h2 className="text-xl font-bold my-4 mt-5">
        Pangalawang Araw – May 29, 2026
      </h2>

      <table className="w-full border-t border-gray-300 text-sm">
        {/* <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Oras</th>
            <th className="p-2 text-left">Bahagi</th>
            <th className="p-2 text-left">Tagapagsalita</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td className=" p-2">7:30 – 8:00 AM</td>
            <td className="p-2">Pagpapatala ng mga Kalahok</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className="p-2">8:00 – 8:30 AM</td>
            <td className="p-2">Paunang Pananalita</td>
            <td className="p-2">
              <span className="font-semibold">Emmanuel F. Calairo, Ph.D.</span>
              <br />
              <span className="italic text-xs">Dating Tagapangulo, NHCP</span>
              <br />
              <span className="italic text-xs">Supreme Commander, GKCR</span>
              <br />
              <span className="italic text-xs">
                De La Salle University, Manila
              </span>
            </td>
          </tr>

          <tr>
            <td className="p-2">8:30 - 10:00 AM</td>
            <td className="p-2">
              Rizal at ang Laka, Kapangyarihan ng Nasyonalismo
            </td>
            <td className="p-2">
              <span className="font-semibold">Nilo Ocampo, Ph.D.</span>
              <br />
              <span className="italic text-xs">UP Diliman</span>
            </td>
          </tr>

          <tr>
            <td className="p-2">8:30 - 10:00 AM</td>
            <td className="p-2">
              Rizal at mga Kabataan bilang Tagapagmana ng Bayan
            </td>
            <td className="p-2">
              <span className="font-semibold">Bobby Lopez, Ph.D.</span>
              <br />
              <span className="italic text-xs">Bulacan State University</span>
              <br />
              <span className="italic text-xs">
                Tagapangulo, Dalumatan ng GNB 2026
              </span>
            </td>
          </tr>

          <tr>
            <td className="p-2">10:15 – 10:30 AM</td>
            <td className="p-2">Salo-salo sa Minandal</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className="p-2">10:30 AM - 12:00 PM</td>
            <td className="p-2">
              Rizal at Pagsipat sa Diskurso ng Pamana at Kasaysayang Pilipino
            </td>
            <td className="p-2">
              <span className="font-semibold">Vic Villan, Ph.D.</span>
              <br />
              <span className="italic text-xs">UP Diliman</span>
            </td>
          </tr>

          <tr>
            <td className="p-2">12:00 – 01:00 PM</td>
            <td className="p-2">Salo-salo sa Masaganang Pananghalian</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className="p-2">01:00 - 2:30 PM</td>
            <td className="p-2">
              Kursong Rizal sa Contextualized Teaching and Learning
            </td>
            <td className="p-2">
              <span className="font-semibold">Jemma Gonzales, MA</span>
              <br />
              <span className="italic text-xs">
                National University - Manila
              </span>
            </td>
          </tr>

          <tr>
            <td className="p-2">3:15 - 03:30 PM</td>
            <td className="p-2">Salo-salo sa Masaganang Pananghalian</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className="p-2">3:30 - 05:00 PM</td>
            <td className="p-2 ">Rizal sa Panahon ng AI</td>
            <td className="p-2">
              <span className="font-semibold">Dr. Jayson Victoriano</span>
              <br />
              <span className="italic text-xs">Bulacan State University</span>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Third Table */}
      <h2 className="text-xl font-bold my-4 mt-5">
        Pangatlong Araw – May 30, 2026
      </h2>

      <table className="w-full border-t border-gray-300 text-sm">
        {/* <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Oras</th>
            <th className="p-2 text-left">Bahagi</th>
            <th className="p-2 text-left">Tagapagsalita</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <td className=" p-2">8:00 – 8:30 AM</td>
            <td className="p-2">Pagtitipon sa Capitol Grounds</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className=" p-2">8:30 AM – 12:00 PM</td>
            <td className="p-2">Guided City Tour of Vigan</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className=" p-2">12:00 – 01:30 PM</td>
            <td className="p-2">Pagsasalo-salo sa Masaganang Pananghalian</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className=" p-2">1:30 – 02:30 PM</td>
            <td className="p-2">Pagtatapos ng Programa</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className="p-2"></td>
            <td className="p-2">Pananalitang Pangwakas</td>
            <td className="p-2">
              <span className="font-semibold">Rebecca AStilla, MA</span>
              <br />
              <span className="italic text-xs">Bulacan State University</span>
              <br />
              <span className="italic text-xs">
                Tagapangulo-Edukasyon at Pagsasanay, GNB
              </span>
            </td>
          </tr>

          <tr>
            <td className=" p-2"></td>
            <td className="p-2">Pagtatasa ng Gawain</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className=" p-2"></td>
            <td className="p-2">Paggawad ng Katibayn ng Pagdalo</td>
            <td className="p-2"></td>
          </tr>

          <tr>
            <td className=" p-2"></td>
            <td className="p-2">
              Malayang Oras/Pagbabalik sa Masayang Piling ng Pamilya
            </td>
            <td className="p-2"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProgramTable;
