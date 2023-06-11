import {GridCellParams, GridColDef} from "@mui/x-data-grid";
import {formatPhoneNumber} from "../../lib";
import {BlueArrowIcon, RedArrowIcon, RowGrade, RowGradeNoScript, RowGradeShowRecord} from "./styles.tsx";
import {CallWithResult} from "../../model";
import {TEST_IMAGE} from "shared/config";
import {AppTooltip, Avatar} from "shared/ui";
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/Info';
import ReactPlayer from "react-player";

export type TableGradeProps = {
  grade_type: number;
}

type CallParams = GridCellParams<CallWithResult>;

const getRowIdFromParams = (params: CallParams) => params.row.id;

export function getColumns(hoveredRow: number): GridColDef[] {
  const columns: GridColDef[] = [
    {
      field: 'status',
      headerName: 'Тип',
      width: 60,
      renderCell: (params: CallParams) => {
        const status = params.row.status;

        if (status === 'Дозвонился') {
          return <BlueArrowIcon/>
        }

        if (status === 'Не дозвонился') {
          return <RedArrowIcon/>
        }
      }
    },
    {
      field: 'date',
      headerName: 'Время',
      width: 80,
      valueGetter: (params: CallParams) => {
        return params.row.date.substring(11, 16);
      },
      renderCell: (params: CallParams) => {
        const time = params.row.date.substring(11, 16);
        return <span style={{color: '#122945', fontSize: '15px', fontWeight: '400'}}>{time}</span>
      }
    },
    {

      field: 'name',
      headerName: 'Сотрудник',
      width: 125,
      renderCell: () => {
        return (
          <div style={ {display: 'flex', position: 'relative', width: '100%'} }>
            <Avatar size={ 35 } src={ TEST_IMAGE }/>
            <LanguageIcon
              sx={ {color: '#ADBFDF', position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '0'} }/>
          </div>
        )
      }
    },
    {
      field: 'сall',
      headerName: 'Звонок',
      width: 250,
      maxWidth: 250,
      renderCell: (params: CallParams) => {
        return (
          <span>
            <h5 style={{margin: '0', color: '#122945', fontSize: '15px', fontWeight: '400'}}>
              {params.row.partner_data.name}
            </h5>
            <span style={{color: '#5E7793'}}>
              { formatPhoneNumber(params.row.partner_data.phone) }
            </span>
          </span>
        )

      }
    },
    {
      field: 'source',
      headerName: 'Источник',
      width: 215
    },
    {
      field: 'grade',
      headerName: 'Оценка',
      width: 250,
      renderCell: (params: CallParams) => {
        const id = getRowIdFromParams(params);
        let grade;

        if (params.row.fake_call_result > 0) {
          grade = <RowGrade grade_type={ params.row.fake_call_result }/>
        } else if (params.row.errors && params.row.errors[0] === 'Скрипт не использован') {
          grade = <RowGradeNoScript>Скрипт не использован</RowGradeNoScript>
        } else {
          return <RowGradeShowRecord>Распознать</RowGradeShowRecord>

        }

        let infoIcon;
        if (id === hoveredRow && grade) {
          infoIcon = (
            <AppTooltip title={ params.row.disconnect_reason || 'Неизвестная ошибка'}>
              <InfoIcon style={ {color: '#ADBFDF', fontSize: '20px'} }/>
            </AppTooltip>
          )

        }

        return (
          <div style={ {width: '100%', display: 'flex', alignItems: 'center', columnGap: '5px'} }>
            { grade }{ infoIcon }
          </div>
        )
      }
    },
    {
      headerAlign: 'right',
      field: 'duration',
      headerName: 'Длительность',
      width: 315,
      renderCell: (params: CallParams) => {
        const id = getRowIdFromParams(params);
        const time = params.row.time;
        const url = "https://www.bensound.com/bensound-music/bensound-dubstep.mp3";
        if (id === hoveredRow && params.row.show_record && time > 0) {
          return (
            <div style={ {width: '100%', position: 'relative'} }>
              <ReactPlayer
                url={ url }
                controls={ true }
                width={ 350 }
                height={ 50 }
                style={ {
                  position: 'absolute',
                  right: '0',
                  top: '50%',
                  transform: 'translateY(-50%)'
                } }
              />
            </div>
          )
        }
        if (time > 0) {
          const callDuration = new Date(time * 1000).toISOString().slice(14, 19)
          return (
            <span style={ {width: '100%', textAlign: 'right'} }>
              { callDuration }
            </span>
          )
        }
      }
    }
  ]

  // set default options for every column
  return columns.map((item) => ({
    ...item,
    editable: false,
    sortable: false,
    filterable: false,
    selected: false,
    disableColumnMenu: true,
  }))
}