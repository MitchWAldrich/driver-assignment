function Order (props) {

  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('order_id', target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  }
  
  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <div
      id={props.id}
      className={props.className}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >

    </div>
  )
}

export default Order