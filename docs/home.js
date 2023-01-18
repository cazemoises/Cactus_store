const displayFilterTags = (selectId) => {
    
    const tags = document.querySelector('.filter-tags');
    const selectedTags = document.querySelectorAll('.filter select option:checked');

    tags.innerHTML = '';
    
    selectedTags.forEach((item) => {
        if (item.value) {
            tags.innerHTML += `       
            <button id=${item.value} onclick="deleteFilterTag(this.id)" class="flex">
                <p>${item.value}</p>
                <span>&times;</span>
            </button>`
        }

    });

    
}

const deleteFilterTag = (id) => {

    console.log(id)
    const tag = document.querySelector(`#${id}`);
    return tag.remove();

}

const openFilterSection = () => {

    const filterDiv = document.querySelector('.filter');
    const closedFilter = document.querySelector('.closed-filter');
    closedFilter.style.display = 'none';
    filterDiv.style.display = 'flex';

}

const closeFilterSection = () => {

    const filterDiv = document.querySelector('.filter')
    const closedFilter = document.querySelector('.closed-filter');
    filterDiv.style.display = 'none';
    closedFilter.style.display = 'flex'

}

const filterPrice = () => {

    const filterSlider = document.querySelector('')

}