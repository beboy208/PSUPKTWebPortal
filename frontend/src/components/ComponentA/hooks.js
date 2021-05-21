/**
 * If there are more technical concerns for a component,
 * for example you may want to extract custom hooks into their own file for certain components,
 * you can scale this approach horizontally within the component folder
 */

/**
 * โดยปกติ Compnents จะมีการสร้างและมี funcion ในการจัดการ state ภายใน
 * เพื่อทำให้การเขียน component มีความสามารถในการ reusable มากขึ้น ??
 * ในบทความอ้างว่า วิธีการนี้จะสามารถแชร์ logic ระหว่าง fuunctional component
 * โดยจะย้าย logic ไปที่ hook นั่นเอง
 */

/**
 * การทำ Hook ต้องตั้งชื่อขึ้นต้นด้วยคำว่า use เสมอ
 * สามารถใช้ Hook ได้เฉพาะใน React function เท่านั้น
 */
