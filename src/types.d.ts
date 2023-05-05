type ModalType = {
  handleClose: () => void
  method: string | null
  prevData?: DataType
}

type PrevDataType = SessionType | RelevantFactType | AttachmentType

type SmallIconButtonType = {
  icon: ReactNode
}

type FormType = {
  date: string
  time: string
  title: string
  description: string
  value: string
}

type UserType = {
  id: string
  name: string
  email: string
}

type PatientType = {
  userId: string
  name: string
  birthdate: string
  profession: string
  schooling: string
  demands: string
  personalAnnotations: string
  patientId: string
}

type OccurrenceType = {
  _id: string
  title: string
  content: string
  files: []
  type: string
  createdOn: string
  modifiedOn: string
}

type TimeLineType = {
  patientId: string
  occurrences: OccurrenceType[]
  serviceName: string
  _id: string
  createdOn: string
  modifiedOn: string
}

type SessionType = {
  type: string
  occurrenceId: string
  timelineId: string
  createdOn: string
  title: string
  content: string
  value: number | null
  method: string
  status: string
  payment?: {
    value: number | null
    method: string
    status: string
  }
  handleDelete: (timelineId: string, occurrenceId: string) => void
  handleEdit: (occurenceType: string, data) => void
}

type RelevantFactType = {
  type: string
  occurrenceId: string
  timelineId: string
  createdOn: string
  title: string
  content: string
  handleDelete: (timelineId: string, occurrenceId: string) => void
  handleEdit: (occurenceType: string, data) => void
}

type AttachmentType = {
  type: string
  method?: string
  value?: string
  occurrenceId: string
  timelineId: string
  createdOn: string
  title: string
  date?: string
  content: string
  files: { filename: string; filesize: number }[]
  handleDelete: (timelineId: string, occurrenceId: string) => void
  handleEdit: (occurenceType: string, data) => void
}

type FileType = {
  name: string
  size: number
  type: string
}

type MethodType = 'get' | 'post' | 'put' | 'delete'

type UrlType =
  | 'user'
  | 'user/login'
  | `patient/${string}`
  | 'occurrence'
  | `occurrence/${string}`
  | `timeline/${string}/occurrence/${string}`
  | `timeline${string}`
  | `assessment/${string}`

type QuestionType = {
  type: 'text' | 'radio' | 'radioAndText' | 'textarea' | ''
  abstract: string | null
  question: string
  secondaryQuestion: string
  options: string[]
  textAnswer: string | boolean
  optionAnswer: string
}

type QuestionComponentType = {
  index: number
  question: QuestionType
  setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>
}
