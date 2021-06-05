function Note(Time, Text, Category, Status, Id) {
    this.Time = Time;
    this.Text = Text;
    this.Category = Category;
    this.Status = Status;
    this.Id = Id;
}

function findNoteIndex(notes, id) {
    let i = 0;
    while (notes[i].Id != id) {
        i++;
    }
    return i;
}