const title = document.querySelector("#title");
const notes = document.querySelector("#notes");
const addBtn = document.querySelector("#addBtn");
const notesContainer = document.querySelector("#notesContainer");
const colors = ["bg-sky-200", "bg-yellow-200", "bg-pink-200", "bg-purple-200"];
const borderColors = [
  "border-sky-300",
  "border-yellow-300",
  "border-pink-300",
  "border-purple-300",
];

const addNote = () => {
  addBtn.addEventListener("click", () => {
    if (!title.value.trim()) return;

    const date = new Date();
    const randomColor = Math.floor(Math.random() * colors.length);

    const note = document.createElement("div");
    note.className = `rounded-xl p-4 shadow-md ${colors[randomColor]} ${borderColors[randomColor]} border-l-4 hover:shadow-lg transition-all`;

    note.innerHTML = `
                    <h3 class="font-bold text-lg mb-1 text-sky-800">${
                      title.value
                    }</h3>
                    <p class="text-gray-700 mb-2 whitespace-pre-wrap">${
                      notes.value
                    }</p>
                    <div>
                   
                    </div>
                    <div class="flex justify-between items-center text-xs text-gray-500">
                        <span>${date.toLocaleDateString()}</span>
                        <span>${date.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}</span>
                    </div>
                `;

    notesContainer.appendChild(note);
    title.value = "";
    notes.value = "";
  });
};
